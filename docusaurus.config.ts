import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Syfar',
  tagline: 'Declarative language for test descriptions',
  favicon: 'img/favicon/favicon.ico',

  // Set the production url of your site here
  url: 'https://syfar.dinyad.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dinayd', // Usually your GitHub org/user name.
  projectName: 'syfar', // Usually your repo name.

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
          editUrl:'https://github.com/dinyad-prog00/syfar-docs',
        },
      
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/syfar.png',
    navbar: {
      title: 'Syfar',
      logo: {
        alt: 'Syfar Logo',
        src: 'img/syfar-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        
        
        {
          href: 'https://github.com/dinyad-prog00/syfar',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn Syfar',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'Tutorial',
              to: '/docs/category/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/syfar/shared_invite/zt-2r0onvtxf-W8T2WyNh0iQsXHg0qxxLlw',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Syfar',
              href: 'https://github.com/dinyad-prog00/syfar',
            },
            {
              label: 'GitHub Syfar LS',
              href: 'https://github.com/dinyad-prog00/syfar-ls',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Syfar`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
