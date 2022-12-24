export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-40208bbc","v-328841df","v-0ef51104","v-3d348e0b","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c","v-7e9b42ec","v-32283992","v-184f4da6"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-40208bbc","v-328841df","v-33daf4df","v-54df83da","v-5ff095e6","v-14e41e2c","v-7e9b42ec","v-32283992"]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-40208bbc","v-328841df","v-0ef51104","v-3d348e0b","v-33daf4df","v-8681ccf8","v-772d5e8e","v-54df83da","v-5ff095e6","v-14e41e2c","v-7e9b42ec","v-32283992","v-184f4da6"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
