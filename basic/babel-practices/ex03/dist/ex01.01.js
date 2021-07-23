'use-strict'; // ES6만 쓰겠다.
// block scope variance(ES6)

var users = [{
  no: 0,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 1,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; // 객체 분해(ES6)

print = ({
  no,
  name,
  email
}) => {
  // template 문자열(ES6)
  console.log(`${no}: ${name} : ${email}`);
}; // for..of(ES6)


for (var user of users) {
  print(user);
}
