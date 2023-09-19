import { config } from 'telefunc/client'

config.telefuncUrl = import.meta.env.VITE_API_V1_TELEFUNC
console.log('config.telefuncUrl: ', config.telefuncUrl)

import { hello } from './lib/hello.telefunc.mjs'
const { message } = await hello({ name: 'Evvvvva' })
//const  message = 'Eva'
document.querySelector('#view')!.textContent = message
