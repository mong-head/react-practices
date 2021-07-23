const babel = require('@babel/core');

const result = babel.transform("const app = () => 1;",{}); // ES6

console.log(result);