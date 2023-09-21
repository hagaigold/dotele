import { config } from 'telefunc/client'

// config.telefuncUrl = import.meta.env.VITE_API_V1_TELEFUNC
// import { hello } from './hello.v1.telefunc.mjs'

config.telefuncUrl = import.meta.env.VITE_API_V2_TELEFUNC
import { hello } from './hello.v2.telefunc'

console.log('config.telefuncUrl: ', config.telefuncUrl)

const { message } = await hello({ name: 'Evvvvva' })
document.querySelector('#view')!.textContent = message
