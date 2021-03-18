module.exports = {
    title: "nuxtjs-wiki",
    description: "",
    // head: [["link", { rel: "icon", href: "/logo.ico" }]],
    themeConfig: {
        sidebarDepth: 0,
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
            }
        ],
    },
};
