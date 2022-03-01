import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { HomePage } from "./components";
import { Routers } from "./routers";
console.log(Routers)
const app = () => {
  let defaultTheme = localStorage.getItem('data-theme')
  if (!defaultTheme) {
    localStorage.setItem('data-theme', 'light')
    window.document.documentElement.setAttribute("data-theme", 'light');
  } else {
     window.document.documentElement.setAttribute("data-theme", defaultTheme);
  }
  return (
    <BrowserRouter>
      {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
      <Suspense fallback={<div></div>}>
        <Routes>
          {
            Routers.map(router => (
              <Route
                path={router.path}
                key={router.key}
                element={router.element}
              ></Route>
            ))
          }
          <Route path="/" element={<HomePage/>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default app;
