import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "JavaCraft",
      description: "JavaCraft",
    },
    // "/": {
    //   lang: "en-US",
    //   title: "JavaCraft",
    //   description: "JavaCraft",
    // },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "JavaCraft",
    //   description: "JavaCraft",
    // },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
