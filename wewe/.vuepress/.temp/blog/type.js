export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-711c2fc6","v-2a67d123","v-b7228aa4","v-184f4da6","v-f22f3126"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-711c2fc6"]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-711c2fc6","v-2a67d123","v-b7228aa4","v-184f4da6"]}}}

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
