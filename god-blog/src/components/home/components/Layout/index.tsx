/*
 * @Author: your name
 * @Date: 2022-02-22 22:28:23
 * @LastEditTime: 2022-02-28 21:07:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MyBlog\annanShao.github.io\god-blog\src\components\home\components\Layout\index.tsx
 */
import React, { useState } from "react";
import {
  AreaChartOutlined,
  IdcardFilled,
  CodeFilled,
  SlidersFilled,
} from "@ant-design/icons";
import "./index.scss";

function Layout() {
  const options = [
    {
      name: "站长简介",
      icon: <IdcardFilled style={{ fontSize: "20px" }} />,
      key: "introduce",
    },
    {
      name: "网站统计",
      icon: <AreaChartOutlined style={{ fontSize: "20px" }} />,
      key: "calculate",
    },
    {
      name: "算法集锦",
      icon: <CodeFilled style={{ fontSize: "20px" }} />,
      key: "coding",
    },
    {
      name: "量化系统",
      icon: <SlidersFilled style={{ fontSize: "20px" }} />,
      key: "quantity",
    },
  ];

  function SliderOptions() {
    return (
      <div>
        {options.map((item) => (
          <div className="left-slider__options-wrapper">
            {item.icon}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="layout-wrapper">
      <div className="layout-wrapper__left-slider-wrapper">
        <div className="layout-wrapper__left-slider-wrapper-logo">BLOG</div>
        <SliderOptions></SliderOptions>
      </div>
    </div>
  );
}

export default Layout;
