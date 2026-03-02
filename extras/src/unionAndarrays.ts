let subs: number | string = "1M";

let apiReqStatu: "pending" | "success" | "pending" = "pending";

let airlineSeat: "window" | "aisle" | "middle" = "aisle";

const orders = ["12", "20", "30"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
