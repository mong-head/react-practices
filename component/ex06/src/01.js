import fs from 'fs';

// bad

console.log("bad : push --------------------------------------------------");

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateProducts = state.order.products;
updateProducts.push({
    no:"s002-02",
    name: "블루 양말",
    price:2000,
    amount: 1
})

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

// good

console.log("good 1 : concat --------------------------------------------------");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = state.order.products.concat({
    no:"s002-02",
    name: "블루 양말",
    price:2000,
    amount: 1
});

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("good 2 : spread --------------------------------------------------");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = [...state.order.products,{
    no:"s002-02",
    name: "블루 양말",
    price:2000,
    amount: 1
}];

console.log(state.order.products, updateProducts, state.order.products === updateProducts);
