import { shield } from 'telefunc'
const t = shield.type

shield(hello, [{ name: t.string }])
export async function hello({ name }) {
  const message = 'v1 Welcome ' + name
  return { message }
}
