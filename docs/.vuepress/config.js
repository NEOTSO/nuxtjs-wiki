module.exports = {
    title: "nuxtjs-wiki",
    description: "",
    // head: [["link", { rel: "icon", href: "/logo.ico" }]],
    themeConfig: {
        // sidebarDepth: 0,
        sidebar: [
            ["/", "简介"],
            {
                title: "开始",
                // collapsable: false,
                children: [
                    ["/get-started/installation", "安装"],
                    ["/get-started/routing", "路由"],
                    ["/get-started/directory-structure", "目录结构"],
                ]
            },
            {
                title: "概念",
                children: [
                    ["/concepts/views", "视图"],
                    ["/concepts/context-helpers", "context"],
                    ["/concepts/server-side-rendering", "服务器端渲染"],
                    ["/concepts/static-site-generation", "编译静态html"],
                    ["/concepts/nuxt-lifecycle", "nuxt生命周期"],
                ]
            }
        ],
    },
};
