/*
 * @Author: NyanCatda
 * @Date: 2023-02-04 21:53:29
 * @LastEditTime: 2023-02-05 20:36:09
 * @LastEditors: NyanCatda
 * @Description: 配置文件
 * @FilePath: \pokedrock-docs\docs\.vuepress\config.js
 */
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

var contributors = false

export default defineUserConfig({
    lang: 'en-US',
    // 定义所有可用语言
    locales: {
        '/': {
            lang: 'en-US',
            title: 'SERP Pokédrock Documentation',
            description: 'SERP Pokédrock Documentation',
        },
        '/languages/zh-CN': {
            lang: 'zh-CN',
            title: 'SERP Pokédrock 文档',
            description: 'SERP Pokédrock 模组的文档',
        },
        '/languages/es-ES': {
            lang: 'es-ES',
            title: 'SERP Pokédrock Documentación',
            description: 'SERP Pokédrock Documentación',
        },
    },
    // 定义主题配置
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/hero.png',
        // URL
        logo: 'https://vuejs.org/images/logo.png',
        //路径
        locales: {
            '/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
                toggleColorMode: 'toggle color mode',
                lastUpdatedText: 'Last Updated',
                contributors: contributors,
                // 顶栏
                navbar: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/McShare',
                    },
                ],
                // 侧边栏
                sidebar: [
                    {
                        text: 'Home',
                        link: '/',
                    },
                ],
            },
            '/languages/zh-CN': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                toggleColorMode: '切换主题颜色',
                lastUpdatedText: '最后更新时间',
                contributors: contributors,
                // 顶栏
                navbar: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/McShare',
                    },
                ],
                // 侧边栏
                sidebar: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: '如何使用',
                        children: [
                            {
                                text: '下载与安装',
                                link: '/languages/zh-CN/how-to-use/installation.md', 
                            },
                            {
                                text: '基本技巧',
                                link: '/languages/zh-CN/how-to-use/basic-usage.md', 
                            },
                            {
                                text: '进阶玩法',
                                link: '/languages/zh-CN/how-to-use/advanced-usage',
                            },
                        ],
                    },
                ],
            },
            '/languages/es-ES': {
                selectLanguageName: 'Español',
                selectLanguageText: 'Elige un idioma',
                toggleColorMode: 'Alternar colores del tema',
                lastUpdatedText: 'Última actualización',
                contributors: contributors,
                // 顶栏
                navbar: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/McShare',
                    },
                ],
                // 侧边栏
                sidebar: [
                    {
                        text: 'Hogar',
                        link: '/',
                    },
                ],
            },
        },
    }),
    // 配置插件
    plugins: [
        // 搜索
        searchPlugin({
            // 搜索框文字
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/languages/zh-CN': {
                    placeholder: '搜索文档',
                },
                '/languages/es-ES': {
                    placeholder: 'Buscar',
                },
            },
        }),
        // Google Analytics
        googleAnalyticsPlugin({
            id: 'G-DQL2JBT6RJ',
        }),
    ],
})