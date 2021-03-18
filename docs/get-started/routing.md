# 路由

## 自动配置路由

nuxt中路由不需要手动配置，`pages`路径下所有的`.vue`文件都会自动生成指定的路由。

```
pages/home.vue => /home
pages/news/index.vue => /news
pages/news/_id.vue => /news/:id
```

## 导航

内部链接使用`<NuxtLink>`的`to`属性进行路由跳转，外部链接依旧使用`<a>`。

```vue
<template>
    <NuxtLink to="/">Home page</NuxtLink>
</template>
```