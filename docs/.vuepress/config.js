/*
 * @Author: NyanCatda
 * @Date: 2023-02-04 21:53:29
 * @LastEditTime: 2023-02-06 17:35:08
 * @LastEditors: NyanCatda
 * @Description: 配置文件
 * @FilePath: \pokedrock-docs\docs\.vuepress\config.js
 */
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import {
    navbar_zh_CN,
    navbar_en_US,
    navbar_es_ES,
    sidebar_zh_CN,
    sidebar_en_US,
    sidebar_es_ES,
} from './configs/index.js'

var contributors = false

export default defineUserConfig({
    head: [['link', { rel: 'icon', href: '/images/pokeball.png' }]],
    lang: 'en-US',
    // 定义所有可用语言
    locales: {
        '/': {
            lang: 'en-US',
            title: 'SERP Pokédrock Documentation',
            description: 'SERP Pokédrock Documentation',
        },
        '/lang/zh-CN': {
            lang: 'zh-CN',
            title: 'SERP Pokédrock 文档',
            description: 'SERP Pokédrock 模组的文档',
        },
        '/lang/es-ES': {
            lang: 'es-ES',
            title: 'SERP Pokédrock Documentación',
            description: 'SERP Pokédrock Documentación',
        },
    },
    // 定义主题配置
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/pokeball.png',
        locales: {
            '/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
                toggleColorMode: 'toggle color mode',
                lastUpdatedText: 'Last Updated',
                contributors: contributors,
                // 顶栏
                navbar: navbar_en_US,
                // 侧边栏
                sidebar: sidebar_en_US,
            },
            '/lang/zh-CN': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                toggleColorMode: '切换主题颜色',
                lastUpdatedText: '最后更新时间',
                contributors: contributors,
                // 顶栏
                navbar: navbar_zh_CN,
                // 侧边栏
                sidebar: sidebar_zh_CN,
            },
            '/lang/es-ES': {
                selectLanguageName: 'Español',
                selectLanguageText: 'Elige un idioma',
                toggleColorMode: 'Alternar colores del tema',
                lastUpdatedText: 'Última actualización',
                contributors: contributors,
                // 顶栏
                navbar: navbar_es_ES,
                // 侧边栏
                sidebar: sidebar_es_ES,
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
                '/lang/zh-CN': {
                    placeholder: '搜索文档',
                },
                '/lang/es-ES': {
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