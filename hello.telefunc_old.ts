
async function hello({ name }: { name: string }) {
  const message = 'Welcome ' + name
  return { message }
}

export { hello }