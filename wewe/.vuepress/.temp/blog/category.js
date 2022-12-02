export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-a17546c4","v-03f1cd20"]},"VuePress":{"path":"/category/vuepress/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-a17546c4","v-03f1cd20"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-a17546c4","v-03f1cd20"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-a17546c4","v-03f1cd20"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
