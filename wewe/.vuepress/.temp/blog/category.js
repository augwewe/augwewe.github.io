export const categoryMap = {"category":{"/":{"path":"/category/","map":{"notebook":{"path":"/category/notebook/","keys":["v-a81dc0b4","v-3260c849","v-b4c274e0","v-3d348e0b","v-33daf4df","v-8681ccf8","v-225d4c21","v-48f5c8d0","v-101c6502","v-38968456","v-2d608068","v-772d5e8e"]},"VuePress":{"path":"/category/vuepress/","keys":["v-a81dc0b4","v-3260c849","v-b4c274e0","v-3d348e0b","v-33daf4df","v-8681ccf8","v-225d4c21","v-48f5c8d0","v-101c6502","v-38968456","v-2d608068","v-772d5e8e"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-a81dc0b4","v-3260c849","v-b4c274e0","v-3d348e0b","v-33daf4df","v-8681ccf8","v-225d4c21","v-48f5c8d0","v-101c6502","v-38968456","v-2d608068","v-772d5e8e"]},"VuePress":{"path":"/tag/vuepress/","keys":["v-a81dc0b4","v-3260c849","v-b4c274e0","v-3d348e0b","v-33daf4df","v-8681ccf8","v-225d4c21","v-48f5c8d0","v-101c6502","v-38968456","v-2d608068","v-772d5e8e"]}}}}}

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
