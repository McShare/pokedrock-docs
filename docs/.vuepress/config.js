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
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

var contributors = false

export default defineUserConfig({
    lang: 'zh-CN',
    // 定义所有可用语言
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'SERP Pokédrock模组文档',
            description: 'SERP Pokédrock模组文档',
        },
        '/languages/en-US/': {
            lang: 'en-US',
            title: 'SERP Pokédrock Module Docs',
            description: 'SERP Pokédrock Module Docs',
        },
    },
    // 定义主题配置
    theme: defaultTheme({
        locales: {
            '/': {
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
                ],
            },
            '/languages/en-US/': {
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
        },
    }),
    // 配置插件
    plugins: [
        // 返回顶部
        backToTopPlugin(),
        // 加载进度条
        nprogressPlugin(),
        // 搜索
        searchPlugin({
            // 搜索框文字
            locales: {
                '/': {
                    placeholder: '搜索文档',
                },
                '/languages/en-US/': {
                    placeholder: 'Search',
                },
            },
        }),
        // Google Analytics
        googleAnalyticsPlugin({
            id: 'G-DQL2JBT6RJ',
        }),
    ],
})