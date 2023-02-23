// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight')
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'yeeeDB 저장소입니다🫠',
  tagline: '이것 저것 잡학 정보들을 기록합니다.',
  baseUrl: '/yeeeDB/',
  url: 'https://yeeed711.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yeeed711', // Usually your GitHub org/user name.
  projectName: 'yeeeDB', // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'yeeeDB',
        logo: {
          alt: '블로그 로고',
          src: 'img/yeeed.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            label: 'Front-End',
            position: 'left',
          },
          { to: '/blog', label: 'Article', position: 'left' },
          {
            href: 'https://github.com/yeeed711',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Web',
                to: '/docs/web/intro',
              },
              {
                label: 'JavaScript',
                to: '/docs/JavaScript/intro',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yeeed711',
              },
              {
                label: 'Blog',
                href: 'https://yeeed.tistory.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} yeeeD. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
