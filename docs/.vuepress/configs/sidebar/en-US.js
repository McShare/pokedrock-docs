/*
 * @Author: NyanCatda
 * @Date: 2023-02-06 17:32:35
 * @LastEditTime: 2023-02-06 17:33:13
 * @LastEditors: NyanCatda
 * @Description: English sidebar
 * @FilePath: \pokedrock-docs\docs\.vuepress\configs\sidebar\en-US.js
 */
export const sidebar_en_US = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'How To Use',
        children: [
            {
                text: 'Installation',
                link: '/how-to-use/installation.md',
            },
            {
                text: 'Basic Usage',
                link: '/how-to-use/basic-usage.md',
            },
            {
                text: 'Advanced Usage',
                link: '/how-to-use/advanced-usage',
            },
        ],
    },
    {
        text: 'Illustration',
        children: [
            {
                text: 'Item',
                link: '/illustration/item.md',
            },
            {
                text: 'Generation 1',
                link: '/illustration/gen1.md',
            },
            {
                text: 'Generation 2',
                link: '/illustration/gen2.md',
            },
            {
                text: 'Generation 3',
                link: '/illustration/gen3.md',
            },
        ],
    },
]