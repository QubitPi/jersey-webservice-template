import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Jersey Webservice Template',
  tagline: 'Avoiding boilerplate code',
  favicon: 'img/favicon.ico',

  url: 'https://qubitpi.github.io',
  baseUrl: '/jersey-webservice-template/',

  organizationName: 'QubitPi',
  projectName: 'jersey-webservice-template',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Jersey Webservice Template',
      logo: {
        alt: 'Jersey Webservice Template Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://QubitPi.github.io/jersey-webservice-template/apidocs",
          label: "API",
          position: "left",
        },
        {
          href: 'https://github.com/QubitPi/jersey-webservice-template',
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
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/jersey',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/QubitPi/jersey-webservice-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jiaqi Liu. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java", "bash", "json"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
