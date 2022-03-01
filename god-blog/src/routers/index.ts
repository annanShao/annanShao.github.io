/*
 * @Author: your name
 * @Date: 2022-02-19 22:12:46
 * @LastEditTime: 2022-02-20 22:19:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MyBlog\annanShao.github.io\god-blog\src\routers\index.ts
 */

import {
  NotFoundPage
} from '../components'

export type RouterType = {
  path: string,
  element: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean,
  key: string
}

const NotFoundRouter: RouterType = {
  path: '/NotFoundPage',
  element: NotFoundPage,
  root: [],
  key: 'notFound'
}

// 总路由
const Routers: RouterType[] = ([
  NotFoundRouter
])

export {
  Routers
}