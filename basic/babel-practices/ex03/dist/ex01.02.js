'use-strict'; // ES6만 쓰겠다.
// block scope variance(ES6)

const users = [{
  no: 0,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 1,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; // 객체 분해(ES6)

print = _ref => {
  let {
    no,
    name,
    email
  } = _ref;
  // template 문자열(ES6)
  console.log(`${no}: ${name} : ${email}`);
}; // for..of(ES6)


for (let user of users) {
  print(user);
}
