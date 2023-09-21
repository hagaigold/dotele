import { telefunc, config } from 'telefunc'
import { createRequire } from 'module'

config.disableNamingConvention = true
{
  const require = createRequire(import.meta.url)
  config.telefuncFiles = [
    require.resolve('./hello.v1.telefunc.mjs')
  ]
}

async function main(event) {
    
    const httpResponse = await telefunc({ url: '/_telefunc' , method: event.http.method, body: event.http.body })

    return {
        body: httpResponse.body,
        headers: { 'content-type': httpResponse.contentType },
        status: httpResponse.statusCode,
      }
}

export { main }
