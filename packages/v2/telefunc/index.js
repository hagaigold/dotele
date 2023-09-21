import { telefunc, config } from 'telefunc'

config.disableNamingConvention = true

async function main(event) {
    
    const httpResponse = await telefunc({
      url: '/_telefunc',
      method: event.http.method,
      body: event.http.body
      
      // for debug
      // method: event.http ? event.http.method : 'POST',
      // body: event.http ? event.http.body : '{"file":"/hello.v2.telefunc.ts","name":"hello","args":[{"name":"evva"}]}'
     })

    return {
        body: httpResponse.body,
        headers: { 'content-type': httpResponse.contentType },
        status: httpResponse.statusCode,
        //origeve: event
      }
}

export { main }
