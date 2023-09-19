import { telefunc, config } from 'telefunc'
import { createRequire } from 'module'

//import './server/importBuild.cjs'

config.disableNamingConvention = true
{
  const require = createRequire(import.meta.url)
  config.telefuncFiles = [require.resolve('./lib/hello.telefunc.mjs')]
}

async function main(event) {
    
    const httpResponse = await telefunc({ url: '/_telefunc' , method: event.http.method, body: event.http.body })

    // return new Response(httpResponse.body, {
    //  headers: { 'content-type': httpResponse.contentType },
    //  status: httpResponse.statusCode
    // })

    return {
        body: httpResponse.body,
        headers: { 'content-type': httpResponse.contentType },
        status: httpResponse.statusCode,
        //origeve: event
      }
}

export { main }
