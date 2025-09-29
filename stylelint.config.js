// stylelint.config.js
/** @type {import('stylelint').Config} */

export default {
    // Базовые правила + SCSS
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-order'],

    // SCSS синтаксис
    overrides: [
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],

    rules: {
        /* Общие рекомендации (минимум шума) */
        'no-empty-source': null,
        'selector-class-pattern': null, // не навязываем нейминг

        // 🔧 не трогаем пустые строки внутри декларативных блоков — этим займётся stylelint-order
        'declaration-empty-line-before': null,
        'custom-property-empty-line-before': null,

        /* Порядок блоков внутри правила */
        'order/order': [
            [
                'dollar-variables', // $vars (SCSS)
                'custom-properties', // :root --vars
                'declarations', // свойства
                { type: 'at-rule', name: 'supports' },
                { type: 'at-rule', name: 'media' },
                'rules', // вложенные селекторы
            ],
            { unspecified: 'bottom' },
        ],

        /* Сортировка свойств по логическим группам */
        'order/properties-order': [
            [
                {
                    groupName: 'Positioning',
                    emptyLineBefore: 'always',
                    properties: [
                        'position',
                        'inset',
                        'top',
                        'right',
                        'bottom',
                        'left',
                        'z-index',
                    ],
                },
                {
                    groupName: 'Display & Flow',
                    emptyLineBefore: 'always',
                    properties: [
                        'display',
                        'visibility',
                        'float',
                        'clear',
                        'content',
                    ],
                },
                {
                    groupName: 'Flex & Grid',
                    emptyLineBefore: 'always',
                    properties: [
                        'flex',
                        'flex-flow',
                        'flex-direction',
                        'flex-wrap',
                        'flex-grow',
                        'flex-shrink',
                        'flex-basis',
                        'justify-content',
                        'align-content',
                        'align-items',
                        'align-self',
                        'gap',
                        'row-gap',
                        'column-gap',
                        'grid',
                        'grid-area',
                        'grid-template',
                        'grid-template-rows',
                        'grid-template-columns',
                        'grid-template-areas',
                        'grid-auto-rows',
                        'grid-auto-columns',
                        'grid-auto-flow',
                        'grid-row',
                        'grid-row-start',
                        'grid-row-end',
                        'grid-column',
                        'grid-column-start',
                        'grid-column-end',
                        'place-content',
                        'place-items',
                        'place-self',
                    ],
                },
                {
                    groupName: 'Box Model',
                    emptyLineBefore: 'always',
                    properties: [
                        'box-sizing',
                        'width',
                        'min-width',
                        'max-width',
                        'height',
                        'min-height',
                        'max-height',
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left',
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',
                        'overflow',
                        'overflow-x',
                        'overflow-y',
                    ],
                },
                {
                    groupName: 'Visual',
                    emptyLineBefore: 'always',
                    properties: [
                        'appearance',
                        'background',
                        'background-color',
                        'background-image',
                        'background-position',
                        'background-size',
                        'background-repeat',
                        'border',
                        'border-width',
                        'border-style',
                        'border-color',
                        'border-top',
                        'border-right',
                        'border-bottom',
                        'border-left',
                        'border-radius',
                        'outline',
                        'box-shadow',
                        'opacity',
                    ],
                },
                {
                    groupName: 'Typography',
                    emptyLineBefore: 'always',
                    properties: [
                        'font',
                        'font-family',
                        'font-feature-settings',
                        'font-size',
                        'font-style',
                        'font-weight',
                        'line-height',
                        'letter-spacing',
                        'text-align',
                        'text-transform',
                        'text-decoration',
                        'text-overflow',
                        'white-space',
                        'word-break',
                        'word-wrap',
                        'hyphens',
                        'color',
                    ],
                },
                {
                    groupName: 'Transitions & Animation',
                    emptyLineBefore: 'always',
                    properties: [
                        'transition',
                        'transition-property',
                        'transition-duration',
                        'transition-timing-function',
                        'transition-delay',
                        'animation',
                        'animation-name',
                        'animation-duration',
                        'animation-timing-function',
                        'animation-delay',
                        'animation-iteration-count',
                        'animation-direction',
                        'animation-fill-mode',
                        'animation-play-state',
                    ],
                },
                {
                    groupName: 'Misc',
                    emptyLineBefore: 'always',
                    properties: [
                        'cursor',
                        'pointer-events',
                        'will-change',
                        'filter',
                    ],
                },
            ],
            {
                unspecified: 'bottomAlphabetical', // неизвестные — вниз, по алфавиту
                emptyLineBeforeUnspecified: 'always', // пустая строка перед первой «неизвестной»
                emptyLineMinimumPropertyThreshold: 2, // требовать пустую строку только если в блоке ≥ 2 свойств
                disableFix: false, // можно включить/выключить автофикс целиком
            },
        ],
    },

    ignoreFiles: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.next/**',
        '**/coverage/**',
    ],
};
