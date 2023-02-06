/*
 * @Author: NyanCatda
 * @Date: 2023-02-06 17:31:30
 * @LastEditTime: 2023-02-06 17:31:51
 * @LastEditors: NyanCatda
 * @Description: 中文侧边栏
 * @FilePath: \pokedrock-docs\docs\.vuepress\configs\sidebar\zh-CN.js
 */
export const sidebar_zh_CN = [
    {
        text: '首页',
        link: '/lang/zh-CN/',
    },
    {
        text: '如何使用',
        children: [
            {
                text: '下载与安装',
                link: '/lang/zh-CN/how-to-use/installation.md',
            },
            {
                text: '基本技巧',
                link: '/lang/zh-CN/how-to-use/basic-usage.md',
            },
            {
                text: '进阶玩法',
                link: '/lang/zh-CN/how-to-use/advanced-usage',
            },
        ],
    },
    {
        text: '图鉴',
        children: [
            {
                text: '物品',
                link: '/lang/zh-CN/illustration/item.md',
            },
            {
                text: '第一世代',
                link: '/lang/zh-CN/illustration/gen1.md',
            },
            {
                text: '第二世代',
                link: '/lang/zh-CN/illustration/gen2.md',
            },
            {
                text: '第三世代',
                link: '/lang/zh-CN/illustration/gen3.md',
            },
        ],
    },
]