const c = require('ansi-colors');

function hello(name) {
  console.log(c.magenta(name) + " 님, 안녕하세요?");
}

hello("홍길동");
