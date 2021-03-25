# 编译静态html

https://nuxtjs.org/docs/2.x/concepts/static-site-generation

使用`npm run generate`打包html页面，这种方式有个很大的问题，举个例子，首页默认加载全部的新闻，打包好的页面里面的新闻是打包那个时间点下所有的新闻，并不会随着后台更新而更新所有的数据，因此每次更新需要手动再次打包生成html。