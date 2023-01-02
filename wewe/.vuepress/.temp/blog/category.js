export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-1bc4bef6","v-66e7d778","v-75757bb2","v-a81dc0b4","v-3260c849","v-3d348e0b","v-33daf4df","v-8681ccf8","v-101c6502","v-38968456","v-2d608068","v-772d5e8e","v-54df83da","v-5ff095e6"]},"VuePress":{"path":"/category/vuepress/","keys":["v-1bc4bef6","v-66e7d778","v-75757bb2","v-a81dc0b4","v-3260c849","v-3d348e0b","v-33daf4df","v-8681ccf8","v-101c6502","v-38968456","v-2d608068","v-772d5e8e","v-54df83da","v-5ff095e6"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-1bc4bef6","v-66e7d778","v-75757bb2","v-a81dc0b4","v-3260c849","v-3d348e0b","v-33daf4df","v-8681ccf8","v-101c6502","v-38968456","v-2d608068","v-772d5e8e","v-54df83da","v-5ff095e6"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-1bc4bef6","v-66e7d778","v-75757bb2","v-a81dc0b4","v-3260c849","v-3d348e0b","v-33daf4df","v-8681ccf8","v-101c6502","v-38968456","v-2d608068","v-772d5e8e","v-54df83da","v-5ff095e6"]}}}}}

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
