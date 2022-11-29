export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-2a67d123","v-711c2fc6","v-157bfb4b","v-0f102de0","v-71f4efa2","v-510ceac6"]},"VuePress":{"path":"/category/vuepress/","keys":["v-2a67d123","v-711c2fc6","v-157bfb4b","v-0f102de0","v-71f4efa2","v-510ceac6"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-2a67d123","v-711c2fc6","v-157bfb4b","v-0f102de0","v-71f4efa2","v-510ceac6"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-2a67d123","v-711c2fc6","v-157bfb4b","v-0f102de0","v-71f4efa2","v-510ceac6"]}}}}}

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
