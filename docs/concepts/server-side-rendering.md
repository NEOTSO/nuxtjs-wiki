# 服务器端渲染

原本客户端加载时发请求获取数据，现在我们在服务器端完成，渲染好html页面返回给浏览器，主要目的是SEO优化。

## 设置服务器中间件serverMiddleware

```js
// server-middleware/logger.js
export default function (req, res, next) {
    console.log(req.url)
    next()
}
```

```js
// nuxt.config.js
export default {
  serverMiddleware: ['~/server-middleware/logger']
}
```

## 服务器 vs 浏览器环境

`beforeMount`和`mounted`生命周期可以使用`window`和`document`变量

```js
beforeMount () {
  window.alert('hello');
}
mounted () {
  window.alert('hello');
}
```


## 服务器端渲染步骤

### Step 1: 浏览器到服务器

浏览器发送请求到服务器，服务器执行相关函数，比如`asyncData`, `nuxtServerInit`和`fetch`，利用执行函数得到的数据生成html文件返回给浏览器。

### Step 2: 服务器到浏览器

浏览器解析html文件，执行vue.js，使页面具有交互性。

### Step 3: 浏览器跳转页面

使用`nuxt-link`进行站内页面跳转


## 注意

### window or document undefined

`window`变量在服务器渲染的生命周期阶段无法使用，会报错如下：

> window or document undefined

可以使用`process.client`判断当前是否处于浏览器环境

```js
if (process.client) {
  require('external_library')
}
```

### IOS手机号码bug

测试了没发现bug，有问题再看[官网解决方案](https://nuxtjs.org/docs/2.x/concepts/server-side-rendering#ios-and-phone-numbers)