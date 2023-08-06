/*
 * @Author: NyanCatda
 * @Date: 2023-02-06 17:33:37
 * @LastEditTime: 2023-02-06 17:34:11
 * @LastEditors: NyanCatda
 * @Description: Spanish sidebar
 * @FilePath: \pokedrock-docs\docs\.vuepress\configs\sidebar\es-ES.js
 */
export const sidebar_es_ES = [
    {
        text: 'Hogar',
        link: '/lang/es-ES',
    },
    {
        text: 'Cómo utilizar',
        children: [
            {
                text: 'Instalación',
                link: '/lang/es-ES/how-to-use/installation.md',
            },
            {
                text: 'Uso básico',
                link: '/lang/es-ES/how-to-use/basic-usage.md',
            },
            {
                text: 'Uso avanzado',
                link: '/lang/es-ES/how-to-use/advanced-usage',
            },
        ],
    },
    {
        text: 'Ilustración',
        children: [
            {
                text: 'Artículo',
                link: '/lang/es-ES/illustration/item.md',
            },
            {
                text: 'Generación 1',
                link: '/lang/es-ES/illustration/gen1.md',
            },
            {
                text: 'Generación 2',
                link: '/lang/es-ES/illustration/gen2.md',
            },
            {
                text: 'Generación 3',
                link: '/lang/es-ES/illustration/gen3.md',
            },
        ],
    },
]