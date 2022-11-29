export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-2a67d123","v-711c2fc6","v-157bfb4b","v-0f102de0","v-71f4efa2","v-510ceac6","v-184f4da6"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-2a67d123"]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-2a67d123","v-711c2fc6","v-157bfb4b","v-0f102de0","v-71f4efa2","v-510ceac6","v-184f4da6"]}}}

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
