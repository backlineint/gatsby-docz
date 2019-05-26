import * as colors from './src/utils/colors'

export default {
  title: 'Holly Hunt Design System',
  base: '/docs',
  ignore: ['**/blog/**', 'readme.md'],
  menu: ['Getting Started', 'Components'],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
    styles: {
      h1: `
        font-size: 80px;
        margin-bottom: 10px;
      `,
    },
  },
}
