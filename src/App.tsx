import { FC } from "react";
import { WelcomePage, AboutPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// STYLES
import "./App.scss";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
