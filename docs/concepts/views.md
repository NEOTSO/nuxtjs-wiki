# views

## pages

## layouts

### 默认layout

```vue
// layouts/default.vue
<template>
    <div>
        <my-header />
        <Nuxt />
        <my-footer />
    </div>
</template>
```

### 自定义layout

```vue
// layouts/blog.vue

<template>
  <div>
    <div>My blog navigation bar here</div>
    <Nuxt />
  </div>
</template>
```

```vue
// pages/posts.vue

<template>
  <!-- Your template -->
</template>
<script>
  export default {
    layout: 'blog'
    // page component definitions
  }
</script>
```

### 错误页面

```vue
// layouts/error.vue

<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
```

## 根路径下App.html

```html
<!-- 默认模版 -->

<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

```html
<!-- 自定义例子根路径下app.html -->

<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html {{ HTML_ATTRS }}><!--<![endif]-->
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

> 官方不建议直接在模版html文件app.html中引入js和css文件，而是建议在nuxt.config.js中引入