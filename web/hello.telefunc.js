export { hello }

//import { shield } from 'telefunc'
//const t = shield.type

//shield(hello, [{ name: t.string }])
async function hello({ name }) {
  const r = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-c6a0ca30-fb85-4bbd-b95c-cd90b93934f5/sample/hello')
  //const message = 'Welcome ' + name
  const message = await r.text()
  console.log('test: ', message)
  return { message }
}
