import {defineConfig} from 'vitepress';

export const sidebar = [
  {
    text: 'Forma CRM',
    items: [
      {text: 'Встречи', link: '/crm/meetings'},
      {text: 'Сущности', link: '/crm/entities'},
    ],
  },
  {
    text: 'Гайды',
    items: [
      {text: 'Иструменты', link: '/guides/tools'},
    ],
  },
];

export default defineConfig({
  srcDir: 'src',
  base: '/forma-wiki/', // see: https://vitepress.vuejs.org/guide/deploying#using-github-actions
  lang: 'ru-RU',
  title: 'Forma Web Wiki',
  lastUpdated: true,
  themeConfig: {
    sidebar,
    editLink: {
      pattern: 'https://github.com/forma-web/forma-wiki/edit/master/src/:path',
      text: 'Исправить эту страницу на GitHub',
    },
  },
});
