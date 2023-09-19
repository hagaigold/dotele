import express  from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

import { telefunc, config } from 'telefunc'
//import { createRequire } from 'module'

process.env.NODE_ENV = 'production'

// manual import (if needed) https://github.com/brillout/vite-plugin-import-build#manual-import
//import './packages/sample/hello/importBuild.cjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('__start')

config.disableNamingConvention = true
{
  //const require = createRequire(import.meta.url)
    config.telefuncFiles = [path.join(__dirname , 'hello.telefunc.mjs')]
}

console.log('__end')



const app = express()

app.use('/', express.static(__dirname + '/dist/client'))

// Telefunc middleware
app.all('/_telefunc', express.text(), async (req, res) => {
    const httpResponse = await telefunc({
        // HTTP Request URL, which is '/_telefunc' if we didn't modify config.telefuncUrl
        url: req.url,
        // HTTP Request Method (GET, POST, ...)
        method: req.method,
        // HTTP Request Body, which can be a string, buffer, or stream
        body: req.body,
        // Optional
        context: {
            /* Some context */
        }
    })
    const { body, statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType).send(body)
})

app.get('/hi', (_, res) => res.send('Hello from express for vite+telefunc'))

const port = process.env.PORT || 3001
app.listen(port, 
    () =>  { console.log(`Server running at http://localhost:${port}`) })
