
async function hello({ name }: { name: string }) {
  const message = 'v2 Welcome ' + name
  return { message }
}

export { hello }