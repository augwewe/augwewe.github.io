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
    "title": "python 自动化",
    "headers": [
      {
        "level": 3,
        "title": "读取excel",
        "slug": "读取excel",
        "link": "#读取excel",
        "children": []
      },
      {
        "level": 3,
        "title": "追加表格",
        "slug": "追加表格",
        "link": "#追加表格",
        "children": []
      },
      {
        "level": 3,
        "title": "xls&xlsx",
        "slug": "xls-xlsx",
        "link": "#xls-xlsx",
        "children": []
      }
    ],
    "path": "/Blog/2022/mywriter.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "python Note",
    "headers": [
      {
        "level": 2,
        "title": "python 基础练习",
        "slug": "python-基础练习",
        "link": "#python-基础练习",
        "children": []
      }
    ],
    "path": "/Blog/2022/mywriter2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "正则表达式",
    "headers": [
      {
        "level": 2,
        "title": "正则表达式",
        "slug": "正则表达式",
        "link": "#正则表达式",
        "children": [
          {
            "level": 3,
            "title": "模式",
            "slug": "模式",
            "link": "#模式",
            "children": []
          },
          {
            "level": 3,
            "title": "常规匹配",
            "slug": "常规匹配",
            "link": "#常规匹配",
            "children": []
          },
          {
            "level": 3,
            "title": "atttention:",
            "slug": "atttention",
            "link": "#atttention",
            "children": []
          },
          {
            "level": 3,
            "title": "泛匹配",
            "slug": "泛匹配",
            "link": "#泛匹配",
            "children": []
          },
          {
            "level": 3,
            "title": "匹配特定目标",
            "slug": "匹配特定目标",
            "link": "#匹配特定目标",
            "children": []
          },
          {
            "level": 3,
            "title": "贪婪匹配",
            "slug": "贪婪匹配",
            "link": "#贪婪匹配",
            "children": []
          }
        ]
      }
    ],
    "path": "/Blog/2022/rule.html",
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
