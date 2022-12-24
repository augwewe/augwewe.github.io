export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-a81dc0b4","v-3260c849","v-b4c274e0","v-3d348e0b","v-225d4c21","v-48f5c8d0","v-101c6502","v-38968456","v-2d608068","v-33daf4df","v-8681ccf8","v-772d5e8e","v-184f4da6"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-a81dc0b4","v-3260c849","v-225d4c21","v-48f5c8d0","v-101c6502","v-38968456","v-2d608068","v-33daf4df"]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-a81dc0b4","v-3260c849","v-b4c274e0","v-3d348e0b","v-225d4c21","v-48f5c8d0","v-101c6502","v-38968456","v-2d608068","v-33daf4df","v-8681ccf8","v-772d5e8e","v-184f4da6"]}}}

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
