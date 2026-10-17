import { useEffect } from "react";

export function useNavActiveLink() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const id = htmlSection.id;
        const top = htmlSection.offsetTop - 50;
        const height = htmlSection.offsetHeight;
        const link = document.querySelector(
          `.nav__menu a[href*="${id}"]`,
        ) as HTMLAnchorElement | null;

        if (!link) return;

        link.classList.toggle(
          "active-link",
          scrollY > top && scrollY <= top + height,
        );
      });
    }

    window.addEventListener("scroll", scrollActive);
    scrollActive();

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);
}
