import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@/index.css";
import AppRouter from "@/rotues/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
