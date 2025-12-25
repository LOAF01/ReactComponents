import { hours, minutes } from "@/constants/ios-picker";
import PickerColumn from "./PickerColumn";

const Picker = () => {
  return (
    <div className="relative flex justify-center items-center h-[150px] w-full">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 border-y border-gray-200 pointer-events-none select-none" />

      <div className="flex gap-6">
        <PickerColumn items={hours} label="hours" />

        <PickerColumn items={minutes} label="min" />
      </div>
    </div>
  );
};

export default Picker;
