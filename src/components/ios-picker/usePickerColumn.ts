import { ITEM_HEIGHT } from "@/constants/ios-picker";
import { useEffect, type RefObject } from "react";

interface Options {
  items: number[];
  value: number;
  setValue: (v: number) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}

export function usePickerColumn({
  items,
  value,
  setValue,
  containerRef,
}: Options) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;

    const handleScroll = () => {
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        const scrollTop = el.scrollTop;
        const index = Math.round(scrollTop / ITEM_HEIGHT);
        const selected = items[index];

        if (selected !== undefined && selected !== value) {
          setValue(selected);
        }

        el.scrollTo({
          top: index * ITEM_HEIGHT,
          behavior: "smooth",
        });
      }, 80);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startY = e.clientY;
      startScrollTop = el.scrollTop;
      el.style.cursor = "grabbing";
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaY = startY - e.clientY;
      el.scrollTop = startScrollTop + deltaY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      el.style.cursor = "grab";
    };

    const handleMouseLeave = () => {
      isDragging = false;
      el.style.cursor = "grab";
    };

    el.addEventListener("scroll", handleScroll);
    el.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [items, value, setValue, containerRef]);
}
