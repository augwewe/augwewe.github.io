const e=JSON.parse('{"key":"v-54df83da","path":"/Blog/2022/Crawl/foundation/AskUrl_Temp.html","title":"PQuery \u89E3\u6790","lang":"zh-CN","frontmatter":{"title":"PQuery \u89E3\u6790","date":"2022-10-30T12:04:21.000Z","author":"cava","isOriginal":true,"category":["notebook","VuePress"],"tag":["Vue","VuePress"],"icon":"vue","sticky":false,"star":false,"password":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"summary":"PQuery 1.1\u8FD4\u56DEli\u6807\u7B7E 1.2 \u8FD4\u56DE\u7F51\u9875\u201Dtitle\\" 1.3 \u83B7\u53D6\u672C\u5730html 1.4\u9009\u62E9\u5668,\u63D0\u53D6li\u6807\u7B7E/\u63D0\u53D6\u6587\u672C(text.())/\u67E5\u770B\u8F93\u51FAtype 1.5\u904D\u5386li,\u5E76\u83B7\u53D6\u5176\u4E2D\u7684\u6587\u672C \u83B7\u53D6\u7535\u5F71\u540D \u4E4B\u524D\u91C7\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1B\u8FD9\u91CC\u6253\u5F00\u4E4B\u524D\u5DF2\u7ECF\u4FDD\u5B58\u7684html\u6587\u4EF6 1.6 find&children find\u4F1A\u8FD4\u56DElist\u4E0B\u7684\u6240\u6709li\u6807\u7B7E;children","head":[["meta",{"property":"og:url","content":"https://augwewe.cn/Blog/2022/Crawl/foundation/AskUrl_Temp.html"}],["meta",{"property":"og:site_name","content":"augwewe"}],["meta",{"property":"og:title","content":"PQuery \u89E3\u6790"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-25T15:05:57.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"cava"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:published_time","content":"2022-10-30T12:04:21.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-25T15:05:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"PQuery","slug":"pquery","link":"#pquery","children":[{"level":3,"title":"1.1\u8FD4\u56DEli\u6807\u7B7E","slug":"_1-1\u8FD4\u56DEli\u6807\u7B7E","link":"#_1-1\u8FD4\u56DEli\u6807\u7B7E","children":[]},{"level":3,"title":"1.2 \u8FD4\u56DE\u7F51\u9875\u201Dtitle\\"","slug":"_1-2-\u8FD4\u56DE\u7F51\u9875-title","link":"#_1-2-\u8FD4\u56DE\u7F51\u9875-title","children":[]},{"level":3,"title":"1.3 \u83B7\u53D6\u672C\u5730html","slug":"_1-3-\u83B7\u53D6\u672C\u5730html","link":"#_1-3-\u83B7\u53D6\u672C\u5730html","children":[]},{"level":3,"title":"1.4\u9009\u62E9\u5668,\u63D0\u53D6li\u6807\u7B7E/\u63D0\u53D6\u6587\u672C(text.())/\u67E5\u770B\u8F93\u51FAtype","slug":"_1-4\u9009\u62E9\u5668-\u63D0\u53D6li\u6807\u7B7E-\u63D0\u53D6\u6587\u672C-text-\u67E5\u770B\u8F93\u51FAtype","link":"#_1-4\u9009\u62E9\u5668-\u63D0\u53D6li\u6807\u7B7E-\u63D0\u53D6\u6587\u672C-text-\u67E5\u770B\u8F93\u51FAtype","children":[]},{"level":3,"title":"1.5\u904D\u5386li,\u5E76\u83B7\u53D6\u5176\u4E2D\u7684\u6587\u672C","slug":"_1-5\u904D\u5386li-\u5E76\u83B7\u53D6\u5176\u4E2D\u7684\u6587\u672C","link":"#_1-5\u904D\u5386li-\u5E76\u83B7\u53D6\u5176\u4E2D\u7684\u6587\u672C","children":[]},{"level":3,"title":"\u83B7\u53D6\u7535\u5F71\u540D","slug":"\u83B7\u53D6\u7535\u5F71\u540D","link":"#\u83B7\u53D6\u7535\u5F71\u540D","children":[]},{"level":3,"title":"1.6 find&children","slug":"_1-6-find-children","link":"#_1-6-find-children","children":[]},{"level":3,"title":"1.6.1 parent & parents","slug":"_1-6-1-parent-parents","link":"#_1-6-1-parent-parents","children":[]},{"level":3,"title":"1.6.2 siblings \u5144\u5F1F\u8282\u70B9","slug":"_1-6-2-siblings-\u5144\u5F1F\u8282\u70B9","link":"#_1-6-2-siblings-\u5144\u5F1F\u8282\u70B9","children":[]},{"level":3,"title":"1.6.3 items \u904D\u5386\u83B7\u53D6li\u6807\u7B7E","slug":"_1-6-3-items-\u904D\u5386\u83B7\u53D6li\u6807\u7B7E","link":"#_1-6-3-items-\u904D\u5386\u83B7\u53D6li\u6807\u7B7E","children":[]},{"level":3,"title":"1.6.4 attr \u83B7\u53D6href \u9996\u4E2A/\u904D\u5386\u83B7\u53D6\u6240\u6709","slug":"_1-6-4-attr-\u83B7\u53D6href-\u9996\u4E2A-\u904D\u5386\u83B7\u53D6\u6240\u6709","link":"#_1-6-4-attr-\u83B7\u53D6href-\u9996\u4E2A-\u904D\u5386\u83B7\u53D6\u6240\u6709","children":[]},{"level":3,"title":"1.6.5\u83B7\u53D6\u6807\u7B7E\u4E2D\u7684\u7EAF\u6587\u5B57\u6587\u672C \uFF0Chtml\u6587\u672C\uFF1Btext(),html()","slug":"_1-6-5\u83B7\u53D6\u6807\u7B7E\u4E2D\u7684\u7EAF\u6587\u5B57\u6587\u672C-html\u6587\u672C-text-html","link":"#_1-6-5\u83B7\u53D6\u6807\u7B7E\u4E2D\u7684\u7EAF\u6587\u5B57\u6587\u672C-html\u6587\u672C-text-html","children":[]},{"level":3,"title":"1.6.6 \u6DFB\u52A0/\u5220\u9664\u8282\u70B9 remove_class/add_class","slug":"_1-6-6-\u6DFB\u52A0-\u5220\u9664\u8282\u70B9-remove-class-add-class","link":"#_1-6-6-\u6DFB\u52A0-\u5220\u9664\u8282\u70B9-remove-class-add-class","children":[]},{"level":3,"title":"1.6.7 attr \u6DFB\u52A0\u5C5E\u6027,text()\u6539\u53D8\u8282\u70B9\u7EAF\u6587\u5B57\u5185\u5BB9\uFF0Chtml()\u6539\u53D8html\u6587\u672C\u5185\u5BB9","slug":"_1-6-7-attr-\u6DFB\u52A0\u5C5E\u6027-text-\u6539\u53D8\u8282\u70B9\u7EAF\u6587\u5B57\u5185\u5BB9-html-\u6539\u53D8html\u6587\u672C\u5185\u5BB9","link":"#_1-6-7-attr-\u6DFB\u52A0\u5C5E\u6027-text-\u6539\u53D8\u8282\u70B9\u7EAF\u6587\u5B57\u5185\u5BB9-html-\u6539\u53D8html\u6587\u672C\u5185\u5BB9","children":[]},{"level":3,"title":"1.7 remove","slug":"_1-7-remove","link":"#_1-7-remove","children":[]},{"level":3,"title":"1.8 \u7C7B\u9009\u62E9\u5668","slug":"_1-8-\u7C7B\u9009\u62E9\u5668","link":"#_1-8-\u7C7B\u9009\u62E9\u5668","children":[]}]}],"git":{"createdTime":1671864082000,"updatedTime":1671980757000,"contributors":[{"name":"augwewe","email":"1085816416@qq.com","commits":5}]},"readingTime":{"minutes":4.8,"words":1440},"filePathRelative":"Blog/2022/Crawl/foundation/AskUrl_Temp.md","localizedDate":"2022\u5E7410\u670830\u65E5"}');export{e as data};