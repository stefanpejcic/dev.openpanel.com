import { defineConfig } from 'vitepress'

export const META_IMAGE = 'https://dev.openpanel.com/social.png'
export const META_URL = 'https://dev.openpanel.com'
export const META_TITLE = 'dev.openpanel.com'
export const META_DESCRIPTION = 'Developer documentation for OpenPanel'

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // ensure it doesn't start with a number
    .replace(/^(\d)/, '_$1')

export default defineConfig({
  title: 'dev.openpanel.com',
  appearance: 'dark',

  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

    anchor: {
      slugify,
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: META_IMAGE }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    outline: [2, 3],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/openpanel' },
      {
        icon: 'github',
        link: 'https://github.com/stefanpejcic/openpanel',
      },
      {
        icon: 'discord',
        link: 'https://discord.openpanel.com',
      },
    ],

    footer: {
      copyright: 'Copyright © 2023-2025 OPENPANEL',
      message: 'Released under the MIT License.',
    },

    editLink: {
      pattern: 'https://github.com/stefanpejcic/dev.openpanel.com/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    
    nav: [
      {
        text: 'Getting Started',
        link: '/introduction.html',
      },
       { text: 'OpenCLI', link: '/cli/', activeMatch: '^/cli/' },
      {
        text: 'Links',
        items: [
          {
            text: 'OpenPanel Docs',
            link: 'https://openpanel.com/docs/panel/intro/',
          },
          {
            text: 'OpenAdmin Docs',
            link: 'https://openpanel.com/docs/admin/intro/',
          },
        ],
      },
    ],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'Welcome',
              link: '/introduction.html',
            },
            {
              text: 'Structure',
              link: '/structure.html',
            },
            {
              text: 'Services',
              link: '/services.html',
            },
            {
              text: 'Localization',
              link: '/localization.html',
            },
            {
              text: 'Updates',
              link: '/updates.html',
            },
            {
              text: 'Customize',
              link: '/customize.html',
            },
            {
              text: 'Logs',
              link: '/logs.html',
            },
          ],
        },
        {
          text: 'OpenCLI',
          items: [
            {
              text: 'opencli',
              link: '/cli/',
            },
            {
              text: 'opencli faq',
              link: '/cli/faq.html',
            },
            {
              text: 'opencli version',
              link: '/cli/version.html',
            },
            {
              text: 'opencli commands',
              link: '/cli/commands.html',
            },
            {
              text: 'opencli admin',
              link: '/cli/admin.html',
            },            
            {
              text: 'opencli domain',
              link: '/cli/domain.html',
            },
            {
              text: 'opencli port',
              link: '/cli/port.html',
            },            
            {
              text: 'opencli proxy',
              link: '/cli/proxy.html',
            },
            {
              text: 'opencli config',
              link: '/cli/config.html',
            },
            {
              text: 'opencli sentinel',
              link: '/cli/sentinel.html',
            },
            {
              text: 'opencli user',
              link: '/cli/users.html',
            },
            {
              text: 'opencli plans',
              link: '/cli/plans.html',
            },
            {
              text: 'opencli domains',
              link: '/cli/domains.html',
            },
            {
              text: 'opencli websites',
              link: '/cli/websites.html',
            },
            {
              text: 'opencli email',
              link: '/cli/email.html',
            },
            {
              text: 'opencli php',
              link: '/cli/php.html',
            },
            {
              text: 'opencli waf',
              link: '/cli/waf.html',
            },
            {
              text: 'opencli imunify',
              link: '/cli/imunify.html',
            },
            {
              text: 'opencli webserver',
              link: '/cli/webserver.html',
            },
            {
              text: 'opencli docker',
              link: '/cli/docker.html',
            },
            {
              text: 'opencli files',
              link: '/cli/files.html',
            },
            {
              text: 'opencli ftp',
              link: '/cli/ftp.html',
            },
            {
              text: 'opencli locale',
              link: '/cli/locale.html',
            },
            {
              text: 'opencli api',
              link: '/cli/api.html',
            },
            {
              text: 'opencli license',
              link: '/cli/license.html',
            },
            {
              text: 'opencli dev',
              link: '/cli/dev.html',
            },
            {
              text: 'opencli error',
              link: '/cli/error.html',
            },
            {
              text: 'opencli report',
              link: '/cli/report.html',
            },
            {
              text: 'opencli update',
              link: '/cli/update.html',
            },
          ],
        },
        {
          text: 'OpenAdmin API',
          items: [
            {
              text: '/openadmin-api/',
              link: '/openadmin-api/',
            },
            {
              text: '/openadmin-api/users',
              link: '/openadmin-api/users.html',
            },
            {
              text: '/openadmin-api/plans',
              link: '/openadmin-api/plans.html',
            },
            {
              text: '/openadmin-api/services',
              link: '/openadmin-api/services.html',
            },
            {
              text: '/openadmin-api/usage',
              link: '/openadmin-api/usage.html',
            },
            {
              text: '/openadmin-api/docker',
              link: '/openadmin-api/docker.html',
            },
            {
              text: '/openadmin-api/system',
              link: '/openadmin-api/system.html',
            },
          ],
        },
        {
          text: 'OpenPanel API',
          items: [
            {
              text: '/api/',
              link: '/openpanel-api/',
            },
          ],
        },
        {
          text: 'Templates',
          items: [
            {
              text: 'About Templates',
              link: '/templates/',
            },
            {
              text: 'Create a Template',
              link: '/templates/create.html',
            },
          ],
        },
        {
          text: 'Modules',
          items: [
            {
              text: 'Introduction',
              link: '/modules/',
            },
            {
              text: 'Example Module',
              link: 'https://openpanel.com/docs/articles/dev-experience/custom-plugins#example',
            },
          ],
        },
        {
          text: 'Extensions',
          items: [
            {
              text: 'Introduction',
              link: '/extensions/',
            },
            {
              text: 'Example Extensions',
              link: '/extensions/examples.html',
            },
          ],
        },
        {
          text: 'Docker images',
          items: [
            {
              text: 'Introduction',
              link: '/images/',
            },
          ],
        },
      ],
    },
  },
})
