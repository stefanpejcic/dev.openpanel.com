import { defineConfig } from 'vitepress'

export const META_IMAGE = 'https://dev.openpanel.co/social.png'
export const META_URL = 'https://dev.openpanel.co'
export const META_TITLE = 'dev.openpanel.co'
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
  title: 'dev.openpanel.co',
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
      { icon: 'x', link: 'https://twitter.com/openpanelco' },
      {
        icon: 'github',
        link: 'https://github.com/stefanpejcic/openpanel',
      },
      {
        icon: 'discord',
        link: 'https://discord.openpanel.co',
      },
    ],

    footer: {
      copyright: 'Copyright © 2024 OPENPANEL',
      message: 'Released under the MIT License.',
    },

    editLink: {
      pattern: 'https://github.com/stefanpejcic/dev.openpanel.co/edit/main/docs/:path',
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
        text: 'Guide',
        link: '/guide/',
      },
       { text: 'API', link: '/api/', activeMatch: '^/api/' },
       { text: 'OpenCLI', link: '/cli/', activeMatch: '^/cli/' },
      {
        text: 'Links',
        items: [
          {
            text: 'OpenPanel Docs',
            link: 'https://openpanel.co/docs/panel/intro/',
          },
          {
            text: 'OpenAdmin Docs',
            link: 'https://openpanel.co/docs/admin/intro/',
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
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: 'Introduction',
              link: '/api/',
            },
            {
              text: 'Authentication',
              link: '/api/authentication.html',
            },
            {
              text: 'Available Endpoints',
              link: '/api/endpoints.html',
            },
            {
              text: 'Best Practice',
              link: '/api/security.html',
            },
          ],
        },
        {
          text: 'OpenCLI',
          items: [
            {
              text: 'Introduction',
              link: '/cli/',
            },
            {
              text: 'Available Commands',
              link: '/cli/commands.html',
            },
            {
              text: 'Custom Commands',
              link: '/cli/create.html',
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
