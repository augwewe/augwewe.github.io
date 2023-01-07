const e=JSON.parse('{"key":"v-576fad4a","path":"/Blog/2022/MongoDB_/About_MGdb.html","title":"pymongo","lang":"zh-CN","frontmatter":{"title":"pymongo","date":"2023-01-03T13:04:21.000Z","author":"cava","isOriginal":true,"category":["notebook"],"tag":["\u722C\u866B\u6280\u672F","MongoDB"],"icon":"vue","sticky":false,"star":false,"password":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"summary":"MongoDB-pymongo \u5BFC\u5165\u5E93 import pymongo 1. \u8FDE\u63A5\u6570\u636E\u5E93 2. \u6307\u5B9A\u6570\u636E\u5E93 \u4E0D\u5B58\u5728\u8BE5\u6570\u636E\u5E93\u4F1A\u81EA\u52A8\u521B\u5EFA 3. \u6307\u5B9A\u96C6\u5408\uFF08\u6570\u636E\u8868\uFF09 4. \u63D2\u5165\u6570\u636E 4.1 \u6279\u91CF\u63D2\u5165\u6570\u636E(insert_one) 4.2 \u6279\u91CF\u63D2\u5165\u6570\u636E(insert_many) 5. \u67E5\u8BE2\u6570\u636E 6. \u67E5\u8BE2\u6570\u636E\u8303\u56F4\uFF08int) 7. \u67E5\u8BE2\u6570\u636E\u8303\u56F4(\u5404\u7C7B\u5C5E\u6027) 8. \u7EDF\u8BA1 9","head":[["meta",{"property":"og:url","content":"https://augwewe.cn/Blog/2022/MongoDB_/About_MGdb.html"}],["meta",{"property":"og:site_name","content":"augwewe"}],["meta",{"property":"og:title","content":"pymongo"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-06T21:04:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"cava"}],["meta",{"property":"article:tag","content":"\u722C\u866B\u6280\u672F"}],["meta",{"property":"article:tag","content":"MongoDB"}],["meta",{"property":"article:published_time","content":"2023-01-03T13:04:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-06T21:04:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"MongoDB-pymongo","slug":"mongodb-pymongo","link":"#mongodb-pymongo","children":[{"level":3,"title":"1. \u8FDE\u63A5\u6570\u636E\u5E93","slug":"_1-\u8FDE\u63A5\u6570\u636E\u5E93","link":"#_1-\u8FDE\u63A5\u6570\u636E\u5E93","children":[]},{"level":3,"title":"2. \u6307\u5B9A\u6570\u636E\u5E93","slug":"_2-\u6307\u5B9A\u6570\u636E\u5E93","link":"#_2-\u6307\u5B9A\u6570\u636E\u5E93","children":[]},{"level":3,"title":"3. \u6307\u5B9A\u96C6\u5408\uFF08\u6570\u636E\u8868\uFF09","slug":"_3-\u6307\u5B9A\u96C6\u5408-\u6570\u636E\u8868","link":"#_3-\u6307\u5B9A\u96C6\u5408-\u6570\u636E\u8868","children":[]},{"level":3,"title":"4. \u63D2\u5165\u6570\u636E","slug":"_4-\u63D2\u5165\u6570\u636E","link":"#_4-\u63D2\u5165\u6570\u636E","children":[]},{"level":3,"title":"5. \u67E5\u8BE2\u6570\u636E","slug":"_5-\u67E5\u8BE2\u6570\u636E","link":"#_5-\u67E5\u8BE2\u6570\u636E","children":[]},{"level":3,"title":"6. \u67E5\u8BE2\u6570\u636E\u8303\u56F4\uFF08int)","slug":"_6-\u67E5\u8BE2\u6570\u636E\u8303\u56F4-int","link":"#_6-\u67E5\u8BE2\u6570\u636E\u8303\u56F4-int","children":[]},{"level":3,"title":"7. \u67E5\u8BE2\u6570\u636E\u8303\u56F4(\u5404\u7C7B\u5C5E\u6027)","slug":"_7-\u67E5\u8BE2\u6570\u636E\u8303\u56F4-\u5404\u7C7B\u5C5E\u6027","link":"#_7-\u67E5\u8BE2\u6570\u636E\u8303\u56F4-\u5404\u7C7B\u5C5E\u6027","children":[]},{"level":3,"title":"8. \u7EDF\u8BA1","slug":"_8-\u7EDF\u8BA1","link":"#_8-\u7EDF\u8BA1","children":[]},{"level":3,"title":"9.\u6392\u5E8F","slug":"_9-\u6392\u5E8F","link":"#_9-\u6392\u5E8F","children":[]},{"level":3,"title":"10. \u504F\u79FB","slug":"_10-\u504F\u79FB","link":"#_10-\u504F\u79FB","children":[]},{"level":3,"title":"11.\u6570\u636E\u66F4\u65B0update  $set","slug":"_11-\u6570\u636E\u66F4\u65B0update-set","link":"#_11-\u6570\u636E\u66F4\u65B0update-set","children":[]},{"level":3,"title":"12. \u6307\u5B9A\u67D0\u4E2A\u6570\u636E\u589E\u52A0","slug":"_12-\u6307\u5B9A\u67D0\u4E2A\u6570\u636E\u589E\u52A0","link":"#_12-\u6307\u5B9A\u67D0\u4E2A\u6570\u636E\u589E\u52A0","children":[]},{"level":3,"title":"13. \u6570\u636E\u5220\u51CF","slug":"_13-\u6570\u636E\u5220\u51CF","link":"#_13-\u6570\u636E\u5220\u51CF","children":[]}]}],"git":{"createdTime":1672852085000,"updatedTime":1673039074000,"contributors":[{"name":"augwewe","email":"1085816416@qq.com","commits":4}]},"readingTime":{"minutes":1.69,"words":506},"filePathRelative":"Blog/2022/MongoDB_/About_MGdb.md","localizedDate":"2023\u5E741\u67083\u65E5"}');export{e as data};