import {defaultTheme, defineUserConfig} from "vuepress";

export default defineUserConfig({
    lang: "zh-CN",
    base: "/sillage-docs/",

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        "/": {
            lang: "zh-CN",
            title: "迹云课表",
            description: "一套轻量课程管理系统",
        },
        "/en/": {
            lang: "en-US",
            title: "sillage",
            description: "A lightweight course management system",

        },
        "/fr/": {
            lang: "fr-FR",
            title: "sillage",
            description: "Un système léger de gestion de cours",
        },
    },

    theme: defaultTheme({
        logo: "/images/sillage.png",
        repo: "laorange/sillage-docs/",
        docsDir: "docs",

        // theme-level locales config
        locales: {
            "/": {
                selectLanguageName: "简体中文",
                // page meta
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdatedText: "上次更新",
                contributorsText: "贡献者",
                // custom containers
                tip: "提示",
                warning: "注意",
                danger: "警告",
                // 404 page
                notFound: [
                    "这里什么都没有",
                    "我们怎么到这来了？",
                    "这是一个 404 页面",
                    "看起来我们进入了错误的链接",
                ],
                backToHome: "返回首页",
                // a11y
                openInNewWindow: "在新窗口打开",
                toggleColorMode: "切换颜色模式",
                toggleSidebar: "切换侧边栏",
            },
            "/en/": {
                home: "/en/home.md",
                editLinkText: "Edit this page on GitHub",
                selectLanguageName: "English",
            },
            "/fr/":{
                home: "/fr/home.md",
                selectLanguageName: "Français",
            }
        },
    }),
});
