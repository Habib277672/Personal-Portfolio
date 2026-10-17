import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
      reset: true,
    });

    sr.reveal(
      ".home__image, .projects__container, .work__container, .testimonials__container, .contact__container",
    );
    sr.reveal(".home__data", { delay: 900, origin: "bottom" });
    sr.reveal(".home__info", { delay: 1200, origin: "bottom" });
    sr.reveal(".home__social, .home__cv", { delay: 1200 });
    sr.reveal(".about__data", { origin: "left" });
    sr.reveal(".about__image", { origin: "right" });
    sr.reveal(".services__card", { interval: 100 });
  }, []);
}
