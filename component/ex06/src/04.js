import fs from "fs";
import update from "react-addons-update";

let state;
let updateOrder;

state = {
	order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateOrder = update(state.order, {
	// 해당 패스 값 변경
	receive: { $set: "부산시 해운대구 우동" },
	payment: { method: { $set: "Mobile" } },
	products: { 
        $push: [{
            no:"s002-02",
            name: "블루 양말",
            price:2000,
            amount: 1
        }],
        // array index 찾아서 변경
        0:{
            amount: {$set: 5}
        }
    }
});

updateOrder.payment.method = "Mobile";

console.log(state.order, updateOrder, state.order === updateOrder);