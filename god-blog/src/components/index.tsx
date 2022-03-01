/*
 * @Author: your name
 * @Date: 2022-02-19 17:19:05
 * @LastEditTime: 2022-02-28 21:12:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MyBlog\annanShao.github.io\god-blog\src\components\index.tsx
 */
// 路由懒加载
import { lazy } from "react";

const NotFoundPage = lazy(() => import("./notFoundPage"));
const HomePage = lazy(() => import("./home"));

export { NotFoundPage, HomePage };
