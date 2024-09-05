import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { ErrorPage, HomePage, PageNotFoundPage, SingleBlogPage } from "./pages";

const App = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto block">
        <Routes>
          <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
          <Route
            path="/:category/:slug"
            element={<SingleBlogPage />}
            errorElement={<ErrorPage />}
          />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
