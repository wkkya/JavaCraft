import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "JavaEncyc",
      description: "JavaEncyc",
    },
    // "/": {
    //   lang: "en-US",
    //   title: "JavaEncyc",
    //   description: "JavaEncyc",
    // },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "JavaEncyc",
    //   description: "JavaEncyc",
    // },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
