import { shield, __decorateTelefunction } from 'telefunc';

const t = shield.type;

shield(hello, [{ name: t.string }]);
async function hello({ name }) {
  const message = 'v1 Welcome ' + name;
  return { message }
}


__decorateTelefunction(hello, "hello", "/hello.v1.telefunc.mjs", "C:/CodeW/do/ffp", true);

export { hello };
