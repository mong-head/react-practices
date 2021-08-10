import fs from 'fs';

let state;
let updateOrder;

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const o1 = {a:1,b:2};
const o2 = {b:3,c:4};
const o3 = Object.assign({},o1,o2);

console.log(o1);
console.log(o2);
console.log(o3);

console.log('bad - violation ============================================');

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateOrder = state.order;
updateOrder.receive = '부산시 해운대구 우동';

console.log(state.order, updateOrder, state.order == updateOrder);

console.log('good - 1====================================================');

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateOrder = Object.assign({},state.order,{receive: '부산시 해운대구 우동'});

console.log(state.order, updateOrder, state.order == updateOrder);