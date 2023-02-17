export const data = JSON.parse("{\"key\":\"v-57b3f61e\",\"path\":\"/Blog/2022/Crawl/foundation/PyQuery.html\",\"title\":\"PyQuery 解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"PyQuery 解析\",\"date\":\"2022-10-30T12:04:21.000Z\",\"author\":\"cava\",\"isOriginal\":true,\"category\":[\"notebook\"],\"tag\":[\"爬虫技术\",\"网页源代码解析方式\"],\"icon\":\"vue\",\"sticky\":false,\"star\":false,\"password\":false,\"article\":true,\"timeline\":true,\"image\":false,\"navbar\":true,\"sidebarIcon\":true,\"headerDepth\":5,\"comment\":true,\"lastUpdated\":true,\"editLink\":false,\"backToTop\":true,\"toc\":true,\"summary\":\"PyQuery 1.1返回li标签 #1.2 返回网页”title\\\" #1.3 获取本地html #1.4选择器,提取li标签/提取文本(text.())/查看输出type #1.5遍历li,并获取其中的文本 #获取电影名 之前采用正则表达式；这里打开之前已经保存的html文件 #1.6 find&children find会返回list下的所有li标签;c\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://augwewe.cn/Blog/2022/Crawl/foundation/PyQuery.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"augwewe\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"PyQuery 解析\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"cava\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"爬虫技术\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"网页源代码解析方式\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-30T12:04:21.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"PyQuery\",\"slug\":\"pyquery\",\"link\":\"#pyquery\",\"children\":[{\"level\":3,\"title\":\"1.1返回li标签\",\"slug\":\"_1-1返回li标签\",\"link\":\"#_1-1返回li标签\",\"children\":[]},{\"level\":3,\"title\":\"#1.2 返回网页”title\\\"\",\"slug\":\"_1-2-返回网页-title\",\"link\":\"#_1-2-返回网页-title\",\"children\":[]},{\"level\":3,\"title\":\"#1.3 获取本地html\",\"slug\":\"_1-3-获取本地html\",\"link\":\"#_1-3-获取本地html\",\"children\":[]},{\"level\":3,\"title\":\"#1.4选择器,提取li标签/提取文本(text.())/查看输出type\",\"slug\":\"_1-4选择器-提取li标签-提取文本-text-查看输出type\",\"link\":\"#_1-4选择器-提取li标签-提取文本-text-查看输出type\",\"children\":[]},{\"level\":3,\"title\":\"#1.5遍历li,并获取其中的文本\",\"slug\":\"_1-5遍历li-并获取其中的文本\",\"link\":\"#_1-5遍历li-并获取其中的文本\",\"children\":[]},{\"level\":3,\"title\":\"#获取电影名\",\"slug\":\"获取电影名\",\"link\":\"#获取电影名\",\"children\":[]},{\"level\":3,\"title\":\"#1.6 find&children\",\"slug\":\"_1-6-find-children\",\"link\":\"#_1-6-find-children\",\"children\":[]},{\"level\":3,\"title\":\"#1.6.1 parent & parents\",\"slug\":\"_1-6-1-parent-parents\",\"link\":\"#_1-6-1-parent-parents\",\"children\":[]},{\"level\":3,\"title\":\"#1.6.2 siblings 兄弟节点\",\"slug\":\"_1-6-2-siblings-兄弟节点\",\"link\":\"#_1-6-2-siblings-兄弟节点\",\"children\":[]},{\"level\":3,\"title\":\"#1.6.3 items 遍历获取li标签\",\"slug\":\"_1-6-3-items-遍历获取li标签\",\"link\":\"#_1-6-3-items-遍历获取li标签\",\"children\":[]},{\"level\":3,\"title\":\"#1.6.4 attr 获取href 首个/遍历获取所有\",\"slug\":\"_1-6-4-attr-获取href-首个-遍历获取所有\",\"link\":\"#_1-6-4-attr-获取href-首个-遍历获取所有\",\"children\":[]},{\"level\":3,\"title\":\"#1.6.5获取标签中的纯文字文本 ，html文本；text(),html()\",\"slug\":\"_1-6-5获取标签中的纯文字文本-html文本-text-html\",\"link\":\"#_1-6-5获取标签中的纯文字文本-html文本-text-html\",\"children\":[]},{\"level\":3,\"title\":\"#1.6.6 添加/删除节点 remove_class/add_class\",\"slug\":\"_1-6-6-添加-删除节点-remove-class-add-class\",\"link\":\"#_1-6-6-添加-删除节点-remove-class-add-class\",\"children\":[]},{\"level\":3,\"title\":\"#1.6.7 attr 添加属性,text()改变节点纯文字内容，html()改变html文本内容\",\"slug\":\"_1-6-7-attr-添加属性-text-改变节点纯文字内容-html-改变html文本内容\",\"link\":\"#_1-6-7-attr-添加属性-text-改变节点纯文字内容-html-改变html文本内容\",\"children\":[]},{\"level\":3,\"title\":\"#1.7 remove\",\"slug\":\"_1-7-remove\",\"link\":\"#_1-7-remove\",\"children\":[]},{\"level\":3,\"title\":\"#1.8 类选择器\",\"slug\":\"_1-8-类选择器\",\"link\":\"#_1-8-类选择器\",\"children\":[]}]}],\"readingTime\":{\"minutes\":5.72,\"words\":1717},\"filePathRelative\":\"Blog/2022/Crawl/foundation/PyQuery.md\",\"localizedDate\":\"2022年10月30日\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
