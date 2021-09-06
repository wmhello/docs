const { config } = require("vuepress-theme-hope");
let sidebar = require("./config/sidebar");

module.exports = config({
  title: "网络招生报名系统",
  description: "学前教育、义务教育网络招生系统 阳光分班系统",
  dest: "./dist",
  base: "/docs/",
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      }
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }
    ]
  ],
  themeConfig: {
    logo: "/product.svg",
    nav: [
      {
        text: "系统介绍",
        icon: "home",
        items: [
          {
            text: "项目架构",
            link: "/zh/guide/framework"
          },
          {
            text: "小程序端",
            link: "/zh/guide/miniprogram"
          },
          {
            text: "后台管理",
            link: "/zh/guide/admin"
          }
        ]
      },
      {
        text: "页面展示",
        icon: "windows",
        items: [
          {
            text: "小程序端--新生报名",
            link: "/zh/view/miniprogram/"
          },
          {
            text: "管理端--学校和教育局",
            link: "/zh/view/admin/"
          }
        ]
      },
      {
        text: "阳光分班",
        icon: "layout",
        link: "/zh/view/"
      },
      {
        text: "初中分班",
        icon: "page",
        link: "/zh/view/"
      }
    ],
    sidebar,
    footer: {
      display: true,
      content: "默认页脚"
    },
    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app"
    },
    copyright: {
      status: "global"
    },
    git: {
      timezone: "Asia/Shanghai"
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard"
        ]
      }
    },
    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png"
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png"
              }
            ]
          }
        ]
      }
    }
  }
});
