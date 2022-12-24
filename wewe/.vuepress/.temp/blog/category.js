export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-40208bbc","v-328841df","v-43b267bd","v-3d348e0b","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c","v-7e9b42ec","v-32283992"]},"VuePress":{"path":"/category/vuepress/","keys":["v-40208bbc","v-328841df","v-43b267bd","v-3d348e0b","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c","v-7e9b42ec","v-32283992"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-40208bbc","v-328841df","v-43b267bd","v-3d348e0b","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c","v-7e9b42ec","v-32283992"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-40208bbc","v-328841df","v-43b267bd","v-3d348e0b","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c","v-7e9b42ec","v-32283992"]}}}}}

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
