import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    $schema: {
      title: 'All the configurable tokens from Alpine.',
      tags: [
        '@studio-icon carbon:blog'
      ]
    },
    body: {
      backgroundColor: {
        initial: '{color.white}',
        dark: '{color.black}'
      },
      color: {
        initial: '{color.gray.800}',
        dark: '{color.gray.200}'
      }
    },
    backdrop: {
      backgroundColor: {
        initial: '#f4f4f5b3', // TODO: rgba({color.gray.100}, 0.7)
        dark: '#18181bb3' // TODO: rgba({color.gray.900}, 0.7)
      }
    },
    readableLine: '68ch'
  },
  elements: {
    container: {
      maxWidth: '64rem',
      padding: {
        mobile: '{space.6}',
        xs: '{space.8}',
        sm: '{space.12}',
        md: '{space.16}'
      }
    }
  },
  color: {
    white: '#FFFFFF',
    primary: {
      50: '#e2f0f5',
      100: '#c2d9dd',
      200: '#a1bdc4',
      300: '#7fa2ab',
      400: '#658e98',
      500: '#4b7a86',
      600: '#406b75',
      700: '#325760',
      800: '#25444c',
      900: '#152f35',
    },
    secondary: {
      50: '#f5eceb',
      100: '#f5d2c9',
      200: '#f0b7a6',
      300: '#ec9c84',
      400: '#ea886b',
      500: '#ea7754',
      600: '#df7150',
      700: '#d06a4b',
      800: '#c16448',
      900: '#a35a44',
    }
  },
  prose: {
    p: {
      fontSize: '18px'
    },
  },
  typography: {
    font: {
      display: '{font.serif}',
      body: '{font.sans}'
    }
  }
})
