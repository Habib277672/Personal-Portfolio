import { animate, stagger, text } from "animejs";
import { useEffect, useRef } from "react";

export function useHomeTextAnimation() {
  const profession1Ref = useRef<HTMLHeadingElement>(null);
  const profession2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el1 = profession1Ref.current;
    const el2 = profession2Ref.current;
    if (!el1 || !el2) return;

    const { chars: chars1 } = text.split(el1, { chars: true });
    const { chars: chars2 } = text.split(el2, { chars: true });

    animate(chars1, {
      y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
      duration: 900,
      ease: "out(3)",
      delay: stagger(80),
      loop: true,
    });

    animate(chars2, {
      y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
      duration: 900,
      ease: "out(3)",
      delay: stagger(80),
      loop: true,
    });
  }, []);

  return { profession1Ref, profession2Ref };
}
