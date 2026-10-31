"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Wires up the page interactions with document-level event delegation, so pages
 * can stay server components:
 *  - [data-tabs]   .tabs__btn  -> .tabs__panel
 *  - .acc__q       accordion
 *  - [data-prev] / [data-next] slider buttons inside a section with [data-slider]
 *  - .reveal       fade-up on scroll
 */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;

      const tab = t.closest<HTMLElement>(".tabs__btn");
      if (tab) {
        const root = tab.closest("[data-tabs]");
        if (!root) return;
        const btns = Array.from(root.querySelectorAll(".tabs__btn"));
        const panels = Array.from(root.querySelectorAll(".tabs__panel"));
        const i = btns.indexOf(tab);
        btns.forEach((b, j) => {
          b.classList.toggle("is-active", j === i);
          b.setAttribute("aria-selected", String(j === i));
        });
        panels.forEach((p, j) => p.classList.toggle("is-active", j === i));
        return;
      }

      const q = t.closest<HTMLElement>(".acc__q");
      if (q) {
        const item = q.parentElement!;
        item.classList.toggle("is-open");
        q.setAttribute("aria-expanded", String(item.classList.contains("is-open")));
        return;
      }

      const nav = t.closest<HTMLElement>("[data-prev], [data-next]");
      if (nav) {
        const track = nav.closest("section")?.querySelector<HTMLElement>("[data-slider] .slider__track");
        const card = track?.firstElementChild as HTMLElement | null;
        if (!track || !card) return;
        const step = card.getBoundingClientRect().width + 20;
        track.scrollBy({ left: nav.hasAttribute("data-prev") ? -step : step, behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    const watch = (root: ParentNode) =>
      root.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    watch(document);

    // Also catch .reveal elements added or re-rendered after load
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches(".reveal:not(.is-in)")) io.observe(n);
          watch(n);
        });
        if (m.type === "attributes" && m.target instanceof HTMLElement && m.target.matches(".reveal:not(.is-in)")) io.observe(m.target);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    // Safety net: never leave content hidden if the observer misses something
    const fallback = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
      });
    }, 1500);

    // Open a tab directly from the URL hash, e.g. /solutions#azure-db
    const hash = window.location.hash.slice(1);
    if (hash) document.querySelector<HTMLElement>(`[data-tab-id="${CSS.escape(hash)}"]`)?.click();

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
