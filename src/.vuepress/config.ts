import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Web Full Stack Encyclopedia-Java",
      description: "Web Full Stack Encyclopedia-Java",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Web全栈百科-Java",
      description: "Web全栈百科-Java",
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
