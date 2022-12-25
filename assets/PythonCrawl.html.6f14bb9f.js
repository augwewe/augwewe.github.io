const e=JSON.parse('{"key":"v-3eeaae93","path":"/Blog/2022/Crawl/PythonCrawl.html","title":"\u722C\u866B\u539F\u7406\u77E5\u8BC6","lang":"zh-CN","frontmatter":{"title":"\u722C\u866B\u539F\u7406\u77E5\u8BC6","date":"2022-11-01T13:04:21.000Z","author":"cava","isOriginal":true,"category":["notebook","VuePress"],"tag":["Vue","VuePress"],"icon":"vue","sticky":false,"star":false,"password":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"summary":"\u7F51\u7EDC\u722C\u866B \u5B9A\u4E49\uFF1A\u5F53\u4ECA\u6700\u5927\u7684\u7F51\u7EDC\u662F\u4E92\u8054\u7F51\uFF0C\u6700\u5927\u7684\u722C\u866B\u662F\u5404\u7C7B\u641C\u7D22\u5F15\u64CE\uFF1A\u8C37\u6B4C\uFF0C\u767E\u5EA6\u3002\u7F51\u8DEF\u722C\u866B\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u5219\u722C\u53D6\u6240\u9700\u8981\u7684\u4FE1\u606F\u7684\u7A0B\u5E8F\uFF0C\u901A\u8FC7URl\u7684\u8BF7\u6C42\u6765\u5B9E\u73B0\u3002\u5728\u5305\u542B\u5E7F\u6CDB\u4FE1\u606F\u65F6\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u4E00\u4E9B\u805A\u7126\u4E8E\u67D0\u4E00\u65B9\u9762\u7684\u4FE1\u606F\u7684\u722C\u866B\u6765\u63D0\u4F9B\u670D\u52A1\uFF0C\u4F8B\u5982\u67D0\u4E00\u7C7B\u578B\u7684\u4E66\u3002 1. \u7F51\u7EDC\u722C\u866B\u7C7B\u578B \u67E5\u770BUser-Agent\u65B9\u5F0F\uFF0C\u53F3\u952E-\u68C0\u67E5-NetWork \u5168\u7F51\u722C\u866B\uFF1A\u8C37\u6B4C\u767E\u5EA6\u641C\u7D22\u5F15\u64CE \u4E3B\u9898\u722C\u866B\uFF1A\u67D0\u4E00\u7C7B","head":[["meta",{"property":"og:url","content":"https://augwewe.cn/Blog/2022/Crawl/PythonCrawl.html"}],["meta",{"property":"og:site_name","content":"augwewe"}],["meta",{"property":"og:title","content":"\u722C\u866B\u539F\u7406\u77E5\u8BC6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-25T14:43:53.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"cava"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:published_time","content":"2022-11-01T13:04:21.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-25T14:43:53.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"1. \u7F51\u7EDC\u722C\u866B\u7C7B\u578B","slug":"_1-\u7F51\u7EDC\u722C\u866B\u7C7B\u578B","link":"#_1-\u7F51\u7EDC\u722C\u866B\u7C7B\u578B","children":[]},{"level":3,"title":"Redis\u6570\u636E\u5E93","slug":"redis\u6570\u636E\u5E93","link":"#redis\u6570\u636E\u5E93","children":[]},{"level":3,"title":"ajax","slug":"ajax","link":"#ajax","children":[]},{"level":3,"title":"\u5B57\u4F53\u53CD\u722C\u866B","slug":"\u5B57\u4F53\u53CD\u722C\u866B","link":"#\u5B57\u4F53\u53CD\u722C\u866B","children":[]},{"level":2,"title":"HTTP","slug":"http","link":"#http","children":[]},{"level":2,"title":"HTTP&HTTPS","slug":"http-https","link":"#http-https","children":[{"level":3,"title":"HTTP\u8BF7\u6C42\u8FC7\u7A0B","slug":"http\u8BF7\u6C42\u8FC7\u7A0B","link":"#http\u8BF7\u6C42\u8FC7\u7A0B","children":[]},{"level":3,"title":"post\u548Cget\u533A\u522B\u662F\u4EC0\u4E48\uFF1F","slug":"post\u548Cget\u533A\u522B\u662F\u4EC0\u4E48","link":"#post\u548Cget\u533A\u522B\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"\u8BF7\u6C42\u5934","slug":"\u8BF7\u6C42\u5934","link":"#\u8BF7\u6C42\u5934","children":[]},{"level":3,"title":"\u54CD\u5E94","slug":"\u54CD\u5E94","link":"#\u54CD\u5E94","children":[]},{"level":3,"title":"session","slug":"session","link":"#session","children":[]},{"level":3,"title":"Cookie","slug":"cookie","link":"#cookie","children":[]},{"level":3,"title":"DNS","slug":"dns","link":"#dns","children":[]},{"level":3,"title":"\u9875\u9762\u5448\u73B0","slug":"\u9875\u9762\u5448\u73B0","link":"#\u9875\u9762\u5448\u73B0","children":[]},{"level":3,"title":"\u7F51\u9875\u5339\u914Dcss \u5185\u5BB9","slug":"\u7F51\u9875\u5339\u914Dcss-\u5185\u5BB9","link":"#\u7F51\u9875\u5339\u914Dcss-\u5185\u5BB9","children":[]}]},{"level":2,"title":"\u7EBF\u7A0B","slug":"\u7EBF\u7A0B","link":"#\u7EBF\u7A0B","children":[{"level":3,"title":"\u5168\u5C40\u89E3\u91CA\u5668","slug":"\u5168\u5C40\u89E3\u91CA\u5668","link":"#\u5168\u5C40\u89E3\u91CA\u5668","children":[]},{"level":3,"title":"\u591A\u7EBF\u7A0B","slug":"\u591A\u7EBF\u7A0B","link":"#\u591A\u7EBF\u7A0B","children":[]},{"level":3,"title":"\u8FDB\u7A0B","slug":"\u8FDB\u7A0B","link":"#\u8FDB\u7A0B","children":[]},{"level":3,"title":"\u591A\u7EBF\u7A0B\u573A\u666F","slug":"\u591A\u7EBF\u7A0B\u573A\u666F","link":"#\u591A\u7EBF\u7A0B\u573A\u666F","children":[]},{"level":3,"title":"\u591A\u8FDB\u7A0B","slug":"\u591A\u8FDB\u7A0B","link":"#\u591A\u8FDB\u7A0B","children":[]}]}],"git":{"createdTime":1671979433000,"updatedTime":1671979433000,"contributors":[{"name":"augwewe","email":"1085816416@qq.com","commits":1}]},"readingTime":{"minutes":15.82,"words":4746},"filePathRelative":"Blog/2022/Crawl/PythonCrawl.md","localizedDate":"2022\u5E7411\u67081\u65E5"}');export{e as data};
