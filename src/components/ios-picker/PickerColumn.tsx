import { useEffect, useRef, useState } from "react";
import { usePickerColumn } from "./usePickerColumn";
import { ITEM_HEIGHT } from "@/constants/ios-picker";

interface PickerColumnProps {
  items: number[];
  label?: string;
}

const PickerColumn = ({ items, label }: PickerColumnProps) => {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  usePickerColumn({ items, value, setValue, containerRef });

  useEffect(() => {
    const index = items.indexOf(value);
    if (index >= 0) {
      containerRef.current?.scrollTo({
        top: index * ITEM_HEIGHT,
        behavior: "auto",
      });
    }
  }, [items, value]);

  return (
    <div className="flex items-center gap-1">
      <div
        ref={containerRef}
        className="w-10 overflow-y-auto scrollbar-hide snap-y snap-mandatory touch-pan-y select-none cursor-grab"
        style={{
          height: ITEM_HEIGHT * 3,
          paddingTop: ITEM_HEIGHT,
          paddingBottom: ITEM_HEIGHT,
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            className="flex justify-center items-center text-lg opacity-60 text-gray-700 snap-start"
            style={{ height: ITEM_HEIGHT, lineHeight: ITEM_HEIGHT / 4 }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="text-xl text-gray-500 mt-1 select-none pointer-events-none">
        {label}
      </div>
    </div>
  );
};

export default PickerColumn;
