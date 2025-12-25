import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import DefaultLayout from "@/layout/DefaultLayout";
import Test from "@/pages/Test";
import IOSPicker from "@/pages/IOSPicker";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ios-picker" element={<IOSPicker />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
