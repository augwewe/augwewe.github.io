export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Cherry":{"path":"/category/cherry/","keys":["v-2bc6566a"]},"Dragonfruit":{"path":"/category/dragonfruit/","keys":["v-24b7c48d"]},"Fruit":{"path":"/category/fruit/","keys":["v-f0ec4556","v-24b7c48d","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850"]},"Strawberry":{"path":"/category/strawberry/","keys":["v-f0ec4556"]},"Vegetable":{"path":"/category/vegetable/","keys":["v-df8b6e0c"]},"Apple":{"path":"/category/apple/","keys":["v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},"Banana":{"path":"/category/banana/","keys":["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]}}}},"tag":{"/":{"path":"/tag/","map":{"red":{"path":"/tag/red/","keys":["v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},"small":{"path":"/tag/small/","keys":["v-f0ec4556","v-2bc6566a"]},"round":{"path":"/tag/round/","keys":["v-df8b6e0c","v-2bc6566a","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},"big":{"path":"/tag/big/","keys":["v-24b7c48d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},"yellow":{"path":"/tag/yellow/","keys":["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},"curly":{"path":"/tag/curly/","keys":["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},"long":{"path":"/tag/long/","keys":["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]}}}}}

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
