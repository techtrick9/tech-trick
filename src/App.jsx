import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { HomePage, PageNotFoundPage, SingleBlogPage } from "./pages";

const App = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category/:slug" element={<SingleBlogPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
