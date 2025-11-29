import IconExperiment from "@/assets/icons/IconExperiment";
import IconFarsightDigital from "@/assets/icons/IconFarsightDigital";
import IconHome from "@/assets/icons/IconHome";
import ComponentButton from "@/components/ComponentButton";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center gap-4 p-4 bg-gray-01">
      {/* menu */}
      <div className="w-10 h-full py-8 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-2">
          <ComponentButton path="/">
            <IconHome />
          </ComponentButton>
          <ComponentButton path="/test">
            <IconExperiment />
          </ComponentButton>
          <ComponentButton path="/ios-picker">
            <IconFarsightDigital />
          </ComponentButton>
        </div>
      </div>

      {/* screen */}
      <main className="h-full w-full flex flex-col items-center bg-white-01 rounded-[34px] p-10 gap-3">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
