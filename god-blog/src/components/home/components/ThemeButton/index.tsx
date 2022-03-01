/*
 * @Author: your name
 * @Date: 2022-03-01 22:02:30
 * @LastEditTime: 2022-03-01 22:49:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MyBlog\annanShao.github.io\god-blog\src\components\home\components\ThemeButton\index.tsx
 */
import React, { useState } from "react";
import { BulbFilled } from "@ant-design/icons";
import './index.scss'

function ThemeButton() {
  const themeDict = {
    light: 'dark',
    dark: 'light'
  }
  const [theme, setTheme] = useState(
    localStorage.getItem("data-theme") || "light"
  );

  function handleChangeTheme() {
    localStorage.setItem("data-theme", themeDict[theme])
    window.document.documentElement.setAttribute("data-theme", themeDict[theme]);
    setTheme(themeDict[theme])
  }
  return <BulbFilled className="theme-button" onClick={handleChangeTheme} style={{color: theme === 'light' ? '#ffc83d' : '#ccc'}} />;
}

export default ThemeButton;
