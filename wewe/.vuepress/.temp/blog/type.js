export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-b0ed2c24","v-0e22ce4e","v-62970491","v-157bfb4b","v-f70d01a4","v-0f102de0","v-32a49c8c","v-48366434","v-a17546c4","v-03f1cd20","v-184f4da6","v-5bfe9096"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-b0ed2c24","v-0e22ce4e","v-62970491","v-157bfb4b","v-32a49c8c","v-a17546c4","v-03f1cd20"]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-b0ed2c24","v-0e22ce4e","v-62970491","v-157bfb4b","v-f70d01a4","v-0f102de0","v-32a49c8c","v-48366434","v-a17546c4","v-03f1cd20","v-184f4da6"]}}}

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
