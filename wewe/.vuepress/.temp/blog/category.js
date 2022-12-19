export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-32a49c8c","v-a17546c4","v-03f1cd20","v-0b2a05cb"]},"VuePress":{"path":"/category/vuepress/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-32a49c8c","v-a17546c4","v-03f1cd20","v-0b2a05cb"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-32a49c8c","v-a17546c4","v-03f1cd20","v-0b2a05cb"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-b0ed2c24","v-711c2fc6","v-62970491","v-157bfb4b","v-0f102de0","v-32a49c8c","v-a17546c4","v-03f1cd20","v-0b2a05cb"]}}}}}

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
