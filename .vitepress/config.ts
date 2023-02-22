import {defineConfig} from 'vitepress';

export const sidebar = [
  {
    text: 'Forma CRM',
    items: [
      {text: 'Встречи', link: '/crm/meetings'},
      {text: 'Сущности', link: '/crm/entities'},
    ],
  },
];

export default defineConfig({
  srcDir: 'src',
  lang: 'ru-RU',
  title: 'Forma Web Wiki',
  lastUpdated: true,
  themeConfig: {
    sidebar,
    editLink: {
      pattern: 'https://github.com/forma-web/forma-wiki/edit/main/src/:path',
      text: 'Исправить эту страницу на GitHub',
    },
  },
});
