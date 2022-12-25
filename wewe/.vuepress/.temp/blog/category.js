export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-a81dc0b4","v-328841df","v-58ca11de","v-3d348e0b","v-38968456","v-2d608068","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c"]},"VuePress":{"path":"/category/vuepress/","keys":["v-a81dc0b4","v-328841df","v-58ca11de","v-3d348e0b","v-38968456","v-2d608068","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-a81dc0b4","v-328841df","v-58ca11de","v-3d348e0b","v-38968456","v-2d608068","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-a81dc0b4","v-328841df","v-58ca11de","v-3d348e0b","v-38968456","v-2d608068","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c"]}}}}}

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
