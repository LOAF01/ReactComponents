import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import DefaultLayout from "@/layout/DefaultLayout";
import Test from "@/pages/Test";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
