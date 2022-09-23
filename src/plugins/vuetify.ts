// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ffffff',
    surface: '#fcfcfc',
    primary: '#18acfa',
    primaryLight: '#dbe9ff',
    cta: '#ff7800',
    secondary: '#ff0095',
    secondaryLight: '#ffdff3',
    error: '#000000',
    info: '#000000',
    success: '#000000',
    warning: '#000000',
  },
}

export default createVuetify({
  defaults: {
    global: {
      ripple: true,
    },
    VBtn: { weight: 'black' },
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
  icons: {
    // @ts-expect-error
    iconfont: 'mdi',
  },
})
