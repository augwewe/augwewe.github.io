export const searchIndex = [
  {
    "title": "关于博主",
    "headers": [],
    "path": "/intro.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "augwewe",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/Blog/2022/firstWrite.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "python Note",
    "headers": [
      {
        "level": 2,
        "title": "步骤",
        "slug": "步骤",
        "link": "#步骤",
        "children": []
      }
    ],
    "path": "/Blog/2022/mywriter.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章编写笔记",
    "headers": [
      {
        "level": 2,
        "title": "步骤",
        "slug": "步骤",
        "link": "#步骤",
        "children": []
      }
    ],
    "path": "/Blog/2022/page-edit.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "加密",
    "headers": [],
    "path": "/encrypted/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "幻灯片",
    "headers": [],
    "path": "/slide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "收藏",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "时间轴",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "notebook 分类",
    "headers": [],
    "path": "/category/notebook/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue 标签",
    "headers": [],
    "path": "/tag/vue/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "VuePress 分类",
    "headers": [],
    "path": "/category/vuepress/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "VuePress 标签",
    "headers": [],
    "path": "/tag/vuepress/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
