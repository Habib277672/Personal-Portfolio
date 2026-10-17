import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let frameId = 0;

    function cursorMove() {
      cursor!.style.left = `${mouseX}px`;
      cursor!.style.top = `${mouseY}px`;
      cursor!.style.transform = "translate(-50%, -50%)";
      frameId = requestAnimationFrame(cursorMove);
    }

    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function onPointerOver(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a")) {
        cursor!.classList.add("hide-cursor");
      } else {
        cursor!.classList.remove("hide-cursor");
      }
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onPointerOver);
    frameId = requestAnimationFrame(cursorMove);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onPointerOver);
    };
  }, []);

  return <div className="cursor" ref={cursorRef} />;
}
