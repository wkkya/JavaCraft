if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const b=e=>a(e,d),f={module:{uri:d},exports:c,require:b};s[d]=Promise.all(i.map((e=>f[e]||b(e)))).then((e=>(r(...e),c)))}}define(["./workbox-84c915bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-DMB_E-W4.js",revision:"b932c2ec6966ee706a884746314aa3a0"},{url:"assets/app-BNsxHkGX.js",revision:"6c50dae7280984becd8f6c59034c96e2"},{url:"assets/baz.html-CD3LylQz.js",revision:"eec4bfa0062327d7da444f773901aa81"},{url:"assets/baz.html-sGbGsu1p.js",revision:"d4ff4123608b338e371c7bdc317e0593"},{url:"assets/disable.html-D2wJ4OaS.js",revision:"40c413ebfd7fffa1ca087ee578e70244"},{url:"assets/disable.html-DxOsTFvp.js",revision:"444fc99b782b1fb4fdad5b9bf75b0931"},{url:"assets/encrypt.html-BzFP3FJp.js",revision:"87e72c206a65195cf0d5c344271af585"},{url:"assets/encrypt.html-D67NhVj9.js",revision:"98be7bb9a209afd6e6c1bde87bd43346"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-5ZBxfCYp.js",revision:"d595c09279ebea64fa699b004102edb8"},{url:"assets/index.html-BOWkTV80.js",revision:"47f4e183511d94c1e078b976fd4b0a1b"},{url:"assets/index.html-BRTfV6-m.js",revision:"56eade5e3d3b215182bacf9f10f05861"},{url:"assets/index.html-BZrvcnz8.js",revision:"7037f93de4201f4117896ee264971186"},{url:"assets/index.html-C1fuVTk4.js",revision:"d37739964520e7001d8f83ff3a616fdc"},{url:"assets/index.html-CjSbbJ2M.js",revision:"260328ace8c0652f2362e1e4a1e85e8f"},{url:"assets/index.html-CxQMrme1.js",revision:"d47cec6ad3ef63b7a1626f372dadea7e"},{url:"assets/index.html-DsNRzts-.js",revision:"702c7ee7dde110f8edaa6920006e9b97"},{url:"assets/index.html-fayXn0aq.js",revision:"443629959aa3ce9359eef82ba6fd5dac"},{url:"assets/index.html-XDWFSTr1.js",revision:"febe774d4a92a9251fbc1f4adb18ef4e"},{url:"assets/layout.html-DRoFTJeU.js",revision:"eaf16ac13f79c546c5c9e493c83e0482"},{url:"assets/layout.html-IyOut7ml.js",revision:"f5e93df305875d381b9a51cfd5d41da9"},{url:"assets/markdown.html-BRaiT_oE.js",revision:"9c3427fad5a38ec8650de2d28e4e9d41"},{url:"assets/markdown.html-BwlxfSI6.js",revision:"f8037d526de63e9de470741eea29f3c1"},{url:"assets/page.html-B0-4f6kZ.js",revision:"a0f9b5ef634b88887994945d90fada3f"},{url:"assets/page.html-C3OLw_DX.js",revision:"f9b33bcbfa7dd250286ac77166083533"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/portfolio.html-BO9l1nhV.js",revision:"9a89e663a97b802a7e372fb5e8c9b3ae"},{url:"assets/portfolio.html-C0jsML4N.js",revision:"689e203098b912f7a915c1412c22b788"},{url:"assets/ray.html-B44N8Yoe.js",revision:"38c41ba174db930f3d194bb9fcb98fd1"},{url:"assets/ray.html-BtprdrA-.js",revision:"20b31396364407a74d078589f40b3028"},{url:"assets/SearchResult-B0EJylkw.js",revision:"f9c765b36a17062cc77c869e25dac282"},{url:"assets/setupDevtools-7MC2TMWH-C0qOXCbn.js",revision:"2fbe6a7719f92416949548717abec1e5"},{url:"assets/style-B8peHxSh.css",revision:"cb8f21f074199cb5c3b4af2dffdf1a59"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"a7e15fa8d5804acab5a40c4866091d2d"},{url:"demo/disable.html",revision:"989542bd4900c62a0647951d0ee849da"},{url:"demo/encrypt.html",revision:"b46ea3d48cc01b930ff6fa37c9c06cad"},{url:"demo/index.html",revision:"a8953cf294a3955b674a324589c2fc1f"},{url:"demo/layout.html",revision:"79eae4e7fb5f1c448e704b5b3248cfc6"},{url:"demo/markdown.html",revision:"db2bf633a511b02cd0f860b028907fde"},{url:"demo/page.html",revision:"bc665b2b7b26459e40cf9a3e904cb631"},{url:"guide/bar/baz.html",revision:"43a20b47b002f65a26220950bf1a1d68"},{url:"guide/bar/index.html",revision:"b828008872943ec839219e06b4a39733"},{url:"guide/foo/index.html",revision:"f199a6908739045d842ed354b7f29772"},{url:"guide/foo/ray.html",revision:"74b084106c57436c88cf5874f3a5fe10"},{url:"guide/index.html",revision:"7c5044645915a4cf718cdcb7101249ce"},{url:"index.html",revision:"442d2d599c9cd68d656b86344c967ca4"},{url:"portfolio.html",revision:"148a1c7a8614376d3e798799e222120c"},{url:"zh/demo/disable.html",revision:"d32cef5eda31b93bb9cbae2a65c7bc04"},{url:"zh/demo/encrypt.html",revision:"18dcd893b5cec051ab476c3e98fda876"},{url:"zh/demo/index.html",revision:"ea0b00b8c86a32d2a8f3693bb31f06df"},{url:"zh/demo/layout.html",revision:"a2671449c4648fc9038092990dd0922d"},{url:"zh/demo/markdown.html",revision:"0cef7f2f293a26af5a32e51b95b188d4"},{url:"zh/demo/page.html",revision:"8075515d333b745977e1186623ca82d5"},{url:"zh/guide/bar/baz.html",revision:"1d1847c9450de2ad2863a93af82a0bb9"},{url:"zh/guide/bar/index.html",revision:"f01c72a48a62a50a4c0661da2fdbaa7d"},{url:"zh/guide/foo/index.html",revision:"811d5f7f538a0ffd994ef5c2aa815120"},{url:"zh/guide/foo/ray.html",revision:"59a3e94335513a102d3122f51375a153"},{url:"zh/guide/index.html",revision:"595555e56a7a9b655be6e6dbc696de9b"},{url:"zh/index.html",revision:"b1680e8b3e8125c2b31fa57ef8dd68c5"},{url:"zh/portfolio.html",revision:"283b68e60441fe52b466962433137d2b"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
