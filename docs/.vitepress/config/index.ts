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
      copyright: 'Copyright © 2024 OPENPANEL',
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
       { text: 'API', link: '/api/', activeMatch: '^/api/' },
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
          text: 'API',
          items: [
            {
              text: '/api/',
              link: '/api/',
            },
            {
              text: '/api/users',
              link: '/api/users.html',
            },
            {
              text: '/api/plans',
              link: '/api/plans.html',
            },
            {
              text: '/api/services',
              link: '/api/services.html',
            },
            {
              text: '/api/usage',
              link: '/api/usage.html',
            },
            {
              text: '/api/docker',
              link: '/api/docker.html',
            },
            {
              text: '/api/system',
              link: '/api/system.html',
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
              text: 'opencli config',
              link: '/cli/config.html',
            },
            {
              text: 'opencli admin',
              link: '/cli/admin.html',
            },
            {
              text: 'opencli sentinel',
              link: '/cli/sentinel.html',
            },
            {
              text: 'opencli users',
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
              text: 'opencli ssl',
              link: '/cli/ssl.html',
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
              text: 'opencli webserver',
              link: '/cli/webserver.html',
            },
            {
              text: 'opencli nginx',
              link: '/cli/nginx.html',
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
              text: 'opencli firewall',
              link: '/cli/firewall.html',
            },
            {
              text: 'opencli cloudflare',
              link: '/cli/cloudflare.html',
            },
            {
              text: 'opencli backup',
              link: '/cli/backup.html',
            },
            {
              text: 'opencli locale',
              link: '/cli/locale.html',
            },
            {
              text: 'opencli license',
              link: '/cli/license.html',
            },
            {
              text: 'opencli report',
              link: '/cli/report.html',
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
              text: 'Available Templates',
              link: '/templates/browse.html',
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
              text: 'Example Modules',
              link: '/modules/examples.html',
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
            {
              text: 'Available images',
              link: '/images/browse.html',
            },
            {
              text: 'Create an image',
              link: '/images/create.html',
            },
          ],
        },
      ],
    },
  },
})
