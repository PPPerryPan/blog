import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "P-Lab",
  description: "boom!",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  
  // 在这里添加head配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico?v=2' }],
    // 如果你想要更完整的favicon配置，可以添加以下内容
    // ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    // ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    // ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ],
  
  theme: recoTheme({
    logo: "/logo.jpg",
    author: "PPPerryPan",
    authorAvatar: "/logo.jpg",
    docsRepo: "https://github.com/PPPerryPan",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    // series: {
    //   "/docs/theme-reco/": [
    //     {
    //       text: "module one",
    //       children: ["home", "theme"],
    //     },
    //     {
    //       text: "module two",
    //       children: ["api", "plugin"],
    //     },
    //   ],
    // },
    navbar: [
      { text: "主页", link: "/" },
      { text: "分类", link: "/categories/jishuzatan/1.html" },
      { text: "标签", link: "/tags/Debug/1.html" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
