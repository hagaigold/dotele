import { telefunc } from 'telefunc/vite'
import type { UserConfig } from 'vite'

const port = 3000

export default {
  build: {
    target: 'esnext'
  },
  plugins: [
    telefunc({
      disableNamingConvention: true
    })
  ],
  appType: 'mpa',
  server: { port, host: true },
  preview: { port }
} as UserConfig
