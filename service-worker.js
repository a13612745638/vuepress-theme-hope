if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"c4e5919d6b9553fcbcb4758c3f31db78"},{url:"api/index.html",revision:"a4bc5a3a880934e2d5d6ef96a128b786"},{url:"api/page.html",revision:"0e7b6b56fbabc467d55e7638ffa58de5"},{url:"api/plugin/container.html",revision:"a35228b012e10d998f0441e3ed9a4f6f"},{url:"api/plugin/copyright.html",revision:"4d73c96332505dc362d559aa382aab7f"},{url:"api/plugin/index.html",revision:"61ba460ff561b6b892d24c60e011fa1f"},{url:"api/plugin/medium-zoom.html",revision:"441ce1023f171c7661d547085cb93e1d"},{url:"api/plugin/pwa.html",revision:"0464569d4cfd6a34143d8fb519732818"},{url:"api/stylus.html",revision:"0209b27e643d1ed0817aa514a3fe1283"},{url:"api/themeConfig.html",revision:"6b0333cf9c730d9c06707e0cf52f4814"},{url:"article/index.html",revision:"a08dea409d8a316cb92460dfbdc2e1bf"},{url:"assets/css/0.styles.9b8b29e2.css",revision:"0a4bf5d848c631ae80d74a27bc95b6ec"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/102.9eb0bd0d.js",revision:"39ed92499d7839d657f38a8712eca220"},{url:"assets/js/app.7e14d3e8.js",revision:"335ed102c9b7ed7f3af55d4591b5b6d6"},{url:"assets/js/layout-Blog.3db40e20.js",revision:"f3f5c4d77628d847e967671b99761ea1"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ad7dde21.js",revision:"503135f27a368c36fd4c241e14ea40c4"},{url:"assets/js/layout-Layout.4b384176.js",revision:"3d7d96332da13000bfb1242ee47b1611"},{url:"assets/js/layout-NotFound.6e2e7c4e.js",revision:"6040745a6fc94d6a0b5cf35d4890ba2b"},{url:"assets/js/page--0ab466d2.183a1a04.js",revision:"3e6af0ea10514aa21fc0b5a04b3e3c91"},{url:"assets/js/page--1f262314.96af7543.js",revision:"4d4dc303ac2a629db190afa859c70e59"},{url:"assets/js/page--5dafe67a.ef53b0ee.js",revision:"87a3ee8c111f6b05d868934829e8e72e"},{url:"assets/js/page--86453650.75e24c11.js",revision:"d3e052b6f6909eb6b9ae3d9064cdbb29"},{url:"assets/js/page--9108a39c.03e19d20.js",revision:"b52ee0dca8b2b3636360c28258a8b77c"},{url:"assets/js/page--d7fc60dc.8f276f59.js",revision:"47fc5d6ef1cad03b59dcdba1c755b5b5"},{url:"assets/js/page-About Vuepress.8384c28c.js",revision:"d8a467fb25bc525b17340af7c714dac3"},{url:"assets/js/page-API Docs.5fe7e68c.js",revision:"d59807532a0bd973b88a148cbfc837b1"},{url:"assets/js/page-API 文档.0057ea3f.js",revision:"bd7d7f31ba2541a6fc2072363ebf128c"},{url:"assets/js/page-Basic.21fd86a3.js",revision:"9e5df729ee2bc33a13513845141ad06a"},{url:"assets/js/page-Blog homepage.05d61d3a.js",revision:"1cc8083a1d313a72643436d34e9b336e"},{url:"assets/js/page-Blog related.592abbc0.js",revision:"4af6b521ff3a77e2a4b5270ab0bbaa63"},{url:"assets/js/page-Comment Function.451f3cef.js",revision:"467fbe17e4e97c8ad4c7ee8b035e8e09"},{url:"assets/js/page-Common problems.0b454fb2.js",revision:"70d26f701dd4344d56fd90521f877048"},{url:"assets/js/page-Custom alignment.f340cd4d.js",revision:"3cd6550e23f6733e392a25a05a3fd626"},{url:"assets/js/page-Darkmode and Theme color.777640c8.js",revision:"b73b33771f2524f5fcd2d96fb109ab5a"},{url:"assets/js/page-Default Theme Config.4d74b77d.js",revision:"20fc7c6ca00e2cb7e1e52bf6bdf76bd8"},{url:"assets/js/page-Demos.1e72ec0e.js",revision:"d207aa56f22fb235a4803faedd7de20c"},{url:"assets/js/page-Emoji List.56bca4ee.js",revision:"8bbd0be733d2b52d14d6f6081d638cc1"},{url:"assets/js/page-Emoji 列表.f4cce980.js",revision:"40c5d35005427de6df3d201ffb073872"},{url:"assets/js/page-Encryption function.0f823bf9.js",revision:"c694b046a1a4b0b6b7f9ffcc6a010dc0"},{url:"assets/js/page-File Structure.ec44748e.js",revision:"f580ed75c32cbbce8fa4c5de388f4f98"},{url:"assets/js/page-Flowchart.0b6c301b.js",revision:"bd3681d523a54e1b26d56e68fe91dcad"},{url:"assets/js/page-Footnote.4406040f.js",revision:"c1e491bf57894f9e39659304519f71f8"},{url:"assets/js/page-Home Page.6b4bd08a.js",revision:"a84c056d3c0a5b3b1639f2b7d597db34"},{url:"assets/js/page-Home.9fc11f09.js",revision:"79d2584c58732453798489c00ca1a745"},{url:"assets/js/page-Introduction.1e69e82b.js",revision:"a8ae4d10c455380ed70b2fb91d1af814"},{url:"assets/js/page-Layout.d51cbc0c.js",revision:"1a8611f096c2309e10f8da05611c6b0e"},{url:"assets/js/page-Markdown DEMO.6bc27b78.js",revision:"626d14d2d67806d354677280cb5ae82e"},{url:"assets/js/page-Markdown Introduction.bab0b09f.js",revision:"b75ecdd8ab4bd869851ca4d8f9d1e90b"},{url:"assets/js/page-Markdown 介绍.fd440f38.js",revision:"8c1a869504e810b34b7f34a070638097"},{url:"assets/js/page-Markdown 新语法.c21c136a.js",revision:"bd364a87c7684f82c99f474608b15294"},{url:"assets/js/page-Markdown示例.e3eb862a.js",revision:"7aa8796af4d643f87706814418aa594b"},{url:"assets/js/page-Markup.9cc630f6.js",revision:"6e5356848da71cab768d1be0d6148b08"},{url:"assets/js/page-NavBar.018db61b.js",revision:"8e88b7c9c5dceabd53f3fdb24f5939c8"},{url:"assets/js/page-New Component.b22b22fe.js",revision:"bc51f5aae25a52499792fb64ae9ae234"},{url:"assets/js/page-New feature.a6425806.js",revision:"a29eb4dd1e0b03f7d5126306c579f76b"},{url:"assets/js/page-New syntax in Markdown.82790d5f.js",revision:"6a038dfc36fc1fea35628fcb5b3ee234"},{url:"assets/js/page-Page Configuration.f99a5241.js",revision:"a5ef482632c3e0304f30b2a65e0373d2"},{url:"assets/js/page-Page information.9882ea7f.js",revision:"bb92bdc32fa82c4b8f6a682028000b1d"},{url:"assets/js/page-Page.05454f79.js",revision:"ab58e711db50318595f2f9d9d7623b8c"},{url:"assets/js/page-Plugin Description.06f35799.js",revision:"94d7fef8fbc21d2942a7a7f412ca7721"},{url:"assets/js/page-Plugins.5b9631e3.js",revision:"a979008f06e5d78b8338264248bc5163"},{url:"assets/js/page-Sidebar.2212a052.js",revision:"72dc9fc915ee79f2691cc3abcab1472f"},{url:"assets/js/page-stylus configuration.91cea0a4.js",revision:"bdf8672257b09cc9284ebdbfad3186c1"},{url:"assets/js/page-stylus 配置.4ff8f38d.js",revision:"301ddcdf5dfce44b2734181bde6b40f1"},{url:"assets/js/page-Superscript and Subscript.881a2ef6.js",revision:"3ce6d6de485fb061db84020016d2c17d"},{url:"assets/js/page-Tex Support.82d173ce.js",revision:"47412c7978ad8e04bb14f501400f8dc7"},{url:"assets/js/page-Tex 语法支持.aec3c67c.js",revision:"1b772762bb26a1ebdd78094a1f13072c"},{url:"assets/js/page-Theme Config.26c11302.js",revision:"4de45cf4eab9902b0fddc8611181affd"},{url:"assets/js/page-TS support.e06ce6b7.js",revision:"4fe38c69ac7dd85c7765568bb8d4c15d"},{url:"assets/js/page-TS 支持.d0c1002b.js",revision:"53fe882ea329558e9d48f354c7f5b307"},{url:"assets/js/page-Vuepress Cases.db1c6513.js",revision:"98720a4d2931dbcdc8085efe828384ff"},{url:"assets/js/page-Vuepress commands.b33e5bb2.js",revision:"f7b4342c6841d55d3082ce4ed46b6a21"},{url:"assets/js/page-Vuepress 案例.03075692.js",revision:"45d008e316ddb121634d23fbc16018c2"},{url:"assets/js/page-vuepress-plugin-container.4422fc4c.js",revision:"c0277abde6fa93ff09fb79d48a29b801"},{url:"assets/js/page-vuepress-plugin-copyright.632a39ed.js",revision:"64e7172ac726749349dcc63c863cbef0"},{url:"assets/js/page-Vuepress.eb5f0c6b.js",revision:"010a653814b4a3a5b8749439ccc52c97"},{url:"assets/js/page-Writing a theme.55cc50bf.js",revision:"ce30c40fb97ffda4b51f87f24e5c6fd5"},{url:"assets/js/page-上下角标.5157b0d3.js",revision:"0badfbb6b5bbbd6b8217579c83f6e829"},{url:"assets/js/page-主题配置.89e69da2.js",revision:"049ff8b2ec9dd29e1c9bbb652327f256"},{url:"assets/js/page-人物.69b99bd8.js",revision:"8b4fc7518028997649b0f5e3b39c1dee"},{url:"assets/js/page-介绍.f2b19ed5.js",revision:"17a025183658253a9ed77304f271b3e7"},{url:"assets/js/page-侧边栏.54ffc094.js",revision:"a85c90151a424b1266e287e303ec1ae7"},{url:"assets/js/page-加密功能.894465ae.js",revision:"d9499d10c6dd28d5032dbabcc05933fb"},{url:"assets/js/page-博客相关.2a64ab07.js",revision:"88525405193fc5c5173bd51854daaeb2"},{url:"assets/js/page-博客首页.8c0d8e7e.js",revision:"73cf14b3d5f53d3ef714a271865c59a7"},{url:"assets/js/page-地点.aa82afab.js",revision:"7f6e93c878c4fde3d10d5eee1f168774"},{url:"assets/js/page-基础知识.0a34b3ed.js",revision:"ded55934b1cc28ffd256b2412aa8e72f"},{url:"assets/js/page-对象.f38169d5.js",revision:"68743d7d0e95d90cf9806812531ea71a"},{url:"assets/js/page-导航栏.9bd57347.js",revision:"4f9a111de357de1b3c53d394e8c6ab4c"},{url:"assets/js/page-布局.6f48d839.js",revision:"c07f91fa5ef218d8329e840740c4e61e"},{url:"assets/js/page-常见问题.8887c770.js",revision:"b5ae650b51e658d1ed9dd0c3ee98c87e"},{url:"assets/js/page-开发主题.b35adb36.js",revision:"afa53189f71935e8fa69fa104a5d2de7"},{url:"assets/js/page-插件.63bd9d04.js",revision:"2f3e9e76cb604c45d67183045b0dddfb"},{url:"assets/js/page-插件说明.7c3dd563.js",revision:"c374a47541204a2206789696b89250fb"},{url:"assets/js/page-文件结构介绍.fcefbe3c.js",revision:"2808e95ab9079377f425fc615804a371"},{url:"assets/js/page-新增特性.ece42d51.js",revision:"64d7544f67270d29121a7eda2c7a906d"},{url:"assets/js/page-新增组件.b2af819b.js",revision:"10d2165826c2266cc203794e091d6a8f"},{url:"assets/js/page-标记.5cee2c0d.js",revision:"2dc9aab8f58dfb435aeb5f39c6d0317c"},{url:"assets/js/page-流程图支持.78415ff7.js",revision:"77db30797a3b726dfeb177799269a352"},{url:"assets/js/page-深色模式与主题色.07a70ae2.js",revision:"ad91aa73b45d97418497125cdcfa68cc"},{url:"assets/js/page-符号.20932c98.js",revision:"ec9e32744d1fd5d3650184aec75c7358"},{url:"assets/js/page-脚注.519fc366.js",revision:"2c81f57f17ea6221585a7d850fbc3378"},{url:"assets/js/page-自定义对齐.8bda3723.js",revision:"0f5eca474d541322a0170e5328a52ba6"},{url:"assets/js/page-自然.b6efd697.js",revision:"6bd6d946e744ad54df83ecddf3b4ec64"},{url:"assets/js/page-评论功能.1878a485.js",revision:"349c40f1601aadb69f950457654fdf70"},{url:"assets/js/page-页面.766e1277.js",revision:"4e06733e3a62a43e22cc26b355117054"},{url:"assets/js/page-页面信息.4f88fdfe.js",revision:"c85a83109175750a0132d8325fc226c4"},{url:"assets/js/page-页面配置.30b1a1f4.js",revision:"29bd1939daf1883f89d3edd1df3c8724"},{url:"assets/js/page-项目指令.954465a0.js",revision:"2bda59373416654aa3f12df68e769410"},{url:"assets/js/page-项目案例.b8820b12.js",revision:"9a39d9bc32ef3158e9a45ad53a8d9eb5"},{url:"assets/js/page-首页.bcb5906e.js",revision:"cb4e50faf0778dee0a2e5f124e5798e1"},{url:"assets/js/page-默认主题配置.826f4c53.js",revision:"d9df813290ac410ef40b52b4d7f1cc75"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.384195cf.js",revision:"4d5f4ce0c166cdb7dafcee3fad98aebf"},{url:"assets/js/vendors~layout-Layout.3a1a8abe.js",revision:"46d4e17418a55580e151ff8678f8d0fa"},{url:"basic/index.html",revision:"cd161beab42ba544fbfebb8005dc9ac9"},{url:"basic/markdown/demo.html",revision:"8dd873e15a3ae0f8024c9405e35811b8"},{url:"basic/markdown/emoji/index.html",revision:"cb52794432e3b306498b23ffbe08c5be"},{url:"basic/markdown/emoji/locate.html",revision:"b283a51dad84f3b6ac4b103c88164b14"},{url:"basic/markdown/emoji/nature.html",revision:"ef937778322530ab4358d203c4de06b0"},{url:"basic/markdown/emoji/object.html",revision:"cbaab1b23f082dc8adbf0cd4bbdfd1b4"},{url:"basic/markdown/emoji/people.html",revision:"d9f13c29543960a0f8a2f7199674d195"},{url:"basic/markdown/emoji/symbol.html",revision:"01eb806dfe555ec4ececa22c168eed9e"},{url:"basic/markdown/index.html",revision:"0eb7d0a1ebf40760dd72f26e90bf36bc"},{url:"basic/vuepress/case.html",revision:"e4c9684b2dc6c127769361fd77d1e112"},{url:"basic/vuepress/command.html",revision:"83a0ac301b3c5cf8cad36cb49d2fe13e"},{url:"basic/vuepress/file.html",revision:"831e96402e8fc68b0300ffb6530b5590"},{url:"basic/vuepress/index.html",revision:"fff344308726766e0f2b0308135a61be"},{url:"basic/vuepress/plugin.html",revision:"ebb01e14975d89526b8a17237ef78a9d"},{url:"basic/vuepress/theme/config.html",revision:"96d59d6fb9d575c34370b7429f97f26f"},{url:"basic/vuepress/theme/dev.html",revision:"b23011da864a5cdc03e5b651de074bc8"},{url:"basic/vuepress/theme/index.html",revision:"e66d618eee2a91e9e3ebdaa6ec5b3eb8"},{url:"category/api/index.html",revision:"de491db5d7fe76195e4819a8713da70a"},{url:"category/api/page/2/index.html",revision:"870a4febb7293139ffd7297f2cf72288"},{url:"category/FAQ/index.html",revision:"f7c1da7e3d69044cc867914d6f04a518"},{url:"category/feature/index.html",revision:"771df1a73454ec5231edb8b0c3ba974d"},{url:"category/feature/page/2/index.html",revision:"bde39917934e30f675dbaed21b786013"},{url:"category/index.html",revision:"269930293f23dda27f3f54bde1d9d2ba"},{url:"category/instruction/index.html",revision:"78d04cb3951d6df9a8666a4a3b1bd893"},{url:"category/layout/index.html",revision:"ddd5862469c2b332dfe294e45d00be17"},{url:"category/layout/page/2/index.html",revision:"a2095cfc4c38aa94a57d3f5fe7f1f69c"},{url:"category/markdown/index.html",revision:"0dfff528fe9ade40adf05885dfebac8b"},{url:"demo/index.html",revision:"5240dc401186a429e106d15b83953a08"},{url:"en/api/index.html",revision:"743cb1b6628154fcc258514e92842f20"},{url:"en/api/page.html",revision:"dd0c21ec401da9faf73ed456939c372d"},{url:"en/api/plugin/container.html",revision:"a1031a34c4c423b2135f71e705b09fb7"},{url:"en/api/plugin/copyright.html",revision:"3900b2c09fdfdd478531b45216269f51"},{url:"en/api/plugin/index.html",revision:"8f7db0cca578a7a3bf167b7598873b12"},{url:"en/api/plugin/medium-zoom.html",revision:"3646976544aff9c8077d181f6c5635db"},{url:"en/api/plugin/pwa.html",revision:"4dcbd8d8b25bdd15146f8a2fca92f8c4"},{url:"en/api/stylus.html",revision:"f84869e3c71b184a85aef8d76f5c9f50"},{url:"en/api/themeConfig.html",revision:"ce707b478e7bd4314663c18e363c3812"},{url:"en/basic/index.html",revision:"922048950a75f6550c628da1bc0d099b"},{url:"en/basic/markdown/demo.html",revision:"1ce660e512751a8339af8e821e9e6fa7"},{url:"en/basic/markdown/emoji.html",revision:"66bfa70d8bed88717bfc8110d95d49b7"},{url:"en/basic/markdown/index.html",revision:"e3f63ff9919823ef0f5591016f0e9214"},{url:"en/basic/vuepress/case.html",revision:"0b2fbc555fe7407ce5a950f75d03992e"},{url:"en/basic/vuepress/command.html",revision:"32a0280cd7edf3f8b285e4d3a5567687"},{url:"en/basic/vuepress/file.html",revision:"a99a6f1a4e5ec0fa8f5195bd8a881030"},{url:"en/basic/vuepress/index.html",revision:"df278f688b31d06e7d8cf7498172f123"},{url:"en/basic/vuepress/plugin.html",revision:"5cf327b1344792d138c0980a39d812c5"},{url:"en/basic/vuepress/theme/config.html",revision:"13cac56f03f5c4872c4da70dd78e7d43"},{url:"en/basic/vuepress/theme/dev.html",revision:"609ac7a82bf622ea592cf6600b651e0f"},{url:"en/basic/vuepress/theme/index.html",revision:"1799a792e824a489a995ba090430b354"},{url:"en/demo/index.html",revision:"00b7930c9ccf7471d1beb4088786654b"},{url:"en/FAQ/index.html",revision:"1864139860ab93d526966df22716bb87"},{url:"en/guide/feature/blog.html",revision:"0a07d910cc13744791f58db5d01a77ae"},{url:"en/guide/feature/comment.html",revision:"11678aac247b15650319d7c93866f003"},{url:"en/guide/feature/component.html",revision:"792800bce121c2eabb2eb427fc495cca"},{url:"en/guide/feature/encrypt.html",revision:"8cfc00a6d5f5bee78dd0876908cd3669"},{url:"en/guide/feature/index.html",revision:"87370d8883afff2962f7b5a1e50090cf"},{url:"en/guide/feature/markdown/align.html",revision:"d3d16cc691127f042ad1b3f21dad0ce8"},{url:"en/guide/feature/markdown/flowchart.html",revision:"3d3a5208459bfdc8d359668902ef2b81"},{url:"en/guide/feature/markdown/footnote.html",revision:"4dcf4e03ed23075bb4bbc3ab39f729d8"},{url:"en/guide/feature/markdown/index.html",revision:"34e04de316bfd0edcb48ac1a55ecf1c3"},{url:"en/guide/feature/markdown/mark.html",revision:"052858595f582c69aca3acadd8f5fab6"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"50ba270e3e75c4f5a36afd5515774c09"},{url:"en/guide/feature/markdown/tex.html",revision:"c92f2c5bce5eb29d9eace587908f72e8"},{url:"en/guide/feature/page-info.html",revision:"f0d41b8df54c48864e5ab421fa8fc3af"},{url:"en/guide/feature/theme.html",revision:"5633030b5a5d336468bfe3c30d9ad20b"},{url:"en/guide/feature/typescript.html",revision:"d84f0c9d9c00261d9ac0a0073d3d3c51"},{url:"en/guide/index.html",revision:"20d03c2de46b0710482b7421fddb55f4"},{url:"en/guide/install.html",revision:"2c4b2a8414be4596c488560ad405768a"},{url:"en/guide/layout/blog.html",revision:"0be35bf6048071cfcf5a6cfe29da9b88"},{url:"en/guide/layout/home.html",revision:"0bd8bbde97abda37d8f37a5ec5101632"},{url:"en/guide/layout/index.html",revision:"4a0b61796f3c2cdf02930d40951d2d11"},{url:"en/guide/layout/navbar.html",revision:"225ac7648e4bec9c167d4343652ff9dd"},{url:"en/guide/layout/page.html",revision:"1a20a4abc2460728d017aeffe12e4eec"},{url:"en/guide/layout/sidebar.html",revision:"85da1d09c0bc85ca815f52e31d300054"},{url:"en/index.html",revision:"81de3cf96e8c317f2d5c37c9a09985b6"},{url:"FAQ/index.html",revision:"9cad4ab86600550654adfed4e239f141"},{url:"guide/feature/blog.html",revision:"92a1a3b78eea3a6c1ca04ae275b06b3e"},{url:"guide/feature/comment.html",revision:"08c177ebf60d8455060113f53236f620"},{url:"guide/feature/component.html",revision:"ad1bd3b90b8f0012f007031d7f31cd71"},{url:"guide/feature/encrypt.html",revision:"787a1c070682d1c07505bee492f35e33"},{url:"guide/feature/index.html",revision:"c1b98f7aef9cb5f5a0579ad54d88afa6"},{url:"guide/feature/markdown/align.html",revision:"f99d4e3281ebd3354b040426d5bd39c9"},{url:"guide/feature/markdown/flowchart.html",revision:"459f774c8d27aca02a878239da93fddb"},{url:"guide/feature/markdown/footnote.html",revision:"e0bca8d514ccccc01371ede025cd4185"},{url:"guide/feature/markdown/index.html",revision:"92223097a1690c84b72f76cedc931a7d"},{url:"guide/feature/markdown/mark.html",revision:"82757efde2326a1d012025b10ef9307e"},{url:"guide/feature/markdown/sup-sub.html",revision:"62a2a07b146532cad1059d53dfff51c3"},{url:"guide/feature/markdown/tex.html",revision:"1922933cc5c8f3f64bdbb3aa89a9448c"},{url:"guide/feature/page-info.html",revision:"e5020a4f5281cc1b0d8d3aec41031ed7"},{url:"guide/feature/theme.html",revision:"b97f8ce2459f926e376cb8d3c3ec2839"},{url:"guide/feature/typescript.html",revision:"18412295779cb9c01eae7da45e4fd178"},{url:"guide/index.html",revision:"0ba182d40105611c9733e22e38ec3960"},{url:"guide/install.html",revision:"95e60bff1992376ab2f1e5b26ce28746"},{url:"guide/layout/blog.html",revision:"2dfef75ef15ab79875ab3a98e64832d6"},{url:"guide/layout/home.html",revision:"326bb41add76de354817c4267939035d"},{url:"guide/layout/index.html",revision:"e8c11e1d04af5767d8070d597552bfcf"},{url:"guide/layout/navbar.html",revision:"83fa1fb4b5b5f06609cde5b80477c429"},{url:"guide/layout/page.html",revision:"1e984577bbee418c522757dd61ffd334"},{url:"guide/layout/sidebar.html",revision:"450324594d0e4b3be1cbd76498898078"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"bf7b14ec93e0c2e42545f5f863445ab3"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"a68d0c5c33a9687242649593b9492f6a"},{url:"tag/api/page/2/index.html",revision:"c61eadfb1dfe64169529477d9ed8e55b"},{url:"tag/blog/index.html",revision:"44ef406804efae79fdb9c1db1869dc0a"},{url:"tag/comment/index.html",revision:"c35b4b31ae9dd01308fd1c780a0bf804"},{url:"tag/components/index.html",revision:"4ceb43a4884bc8eaa6b21b1703ccedcb"},{url:"tag/emoji/index.html",revision:"6a9b9eee74c8f86e5858ed4a8a182a6d"},{url:"tag/encrypt/index.html",revision:"7acd42e9917843452c6cccdb21946562"},{url:"tag/feature/index.html",revision:"2960ffc3e812f5a887d8ac846d2c3977"},{url:"tag/feature/page/2/index.html",revision:"40ce0f848782509f3065e9f04e2799a8"},{url:"tag/frontmatter/index.html",revision:"12d1c48f02cfcd76cdbb0eec4882a71b"},{url:"tag/function/index.html",revision:"6e84cda70ce1f175ba6c340f62933f7c"},{url:"tag/function/page/2/index.html",revision:"a52c708fd155fc67c912ede8b16c2ea4"},{url:"tag/home/index.html",revision:"7df36758956e9733346a13191de08c63"},{url:"tag/index.html",revision:"8a4eaa5609ca3aadbd52e6fc387975f8"},{url:"tag/intro/index.html",revision:"77bd9c65d0356243e101b59daf9d3cd4"},{url:"tag/layout/index.html",revision:"2ad92c39f989d46d3ba00aa6465cf59b"},{url:"tag/layout/page/2/index.html",revision:"b3259a4886b80298ec13ad364f3f493b"},{url:"tag/markdown/index.html",revision:"fa7a465d9064580f2d1a9a1a6b441b9c"},{url:"tag/markdown/page/2/index.html",revision:"449684ebd7e9ef39b90dffb27a05d845"},{url:"tag/markdown/page/3/index.html",revision:"c05d715d19ceab776921dade09056e1d"},{url:"tag/navbar/index.html",revision:"5ee8b6c71acbba191061dd212a9f25fe"},{url:"tag/page-info/index.html",revision:"4662ea919de2f5fc758fccb8f4c52b12"},{url:"tag/plugin/index.html",revision:"b75a4684b33a35502da32874d784f374"},{url:"tag/sidebar/index.html",revision:"c45647c18b99582de2513cb0f5af2a5a"},{url:"tag/style/index.html",revision:"85e1a0ddca9cb5610c8a66463574f55c"},{url:"tag/themeConfig/index.html",revision:"14d233f1b0f6c3b4a0d202583fae2328"},{url:"tag/typescript/index.html",revision:"7f4344593479f41e77859fa5bf6c434c"},{url:"tag/vuepress/index.html",revision:"9672778be5bf0d56da933b21d29de9cd"},{url:"timeline/index.html",revision:"5402aaa10e42cd1d5f23c5cfd63582b1"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
