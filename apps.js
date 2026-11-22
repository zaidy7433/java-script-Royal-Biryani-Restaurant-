var items = ["Chicken Biryani", "Beef Biryani", "Chicken Pulao", "Special Biryani"];
var prices = [350, 450, 300, 550];
alert(
    "----- ROYAL BIRYANI -----\n" +
    "1. Chicken Biryani - Rs. 350\n" +
    "2. Beef Biryani - Rs. 450\n" +
    "3. Chicken Pulao - Rs. 300\n" +
    "4. Special Biryani - Rs. 550"
);
var choice = Number(prompt("Select your item (1-4):"));
if (choice >= 1 && choice <= 4) {

    var quantity = Number(prompt("Enter quantity:"))}
if (quantity < 1) {
    alert("Invalid quantity.");
}
if (quantity >= 1) {
    var price = prices[choice - 1];
    var subtotal = price * quantity;
    var discount = 0;
}

if (quantity >= 5) {
     discount = subtotal * 10 / 100;
}
var ordertype = prompt("Enter order type (Dine-in/Takeaway):");
var extraCharges = 0;
if(ordertype == "Dine-in") {
    extraCharges = 50;
}
else if (ordertype == "Takeaway") {
    extraCharges = 30;
}
else {
    alert("Invalid order type!");
}
 var finalBill = subtotal - discount + extraCharges;
 var orders =[];
 var order = {
    item: items[choice - 1],
    quantity: quantity,
    price: price,
    subtotal: subtotal,
    discount: discount,
    orderType: ordertype,
    extraCharges: extraCharges,
    finalBill: finalBill
};
orders.push(order);

console.log("----- ROYAL BIRYANI - ORDER SUMMARY -----");
console.log("Item:", order.item);
console.log("Quantity:", order.quantity);
console.log("Price:", "Rs." + order.price);
console.log("Subtotal:", "Rs." + order.subtotal);
console.log("Discount:", "Rs." + order.discount);
console.log("Order Type:", order.orderType);

if (ordertype == "Dine-in") {
    console.log("Service Charges:", "Rs." + extraCharges);
}
else if (ordertype == "Takeaway") {
    console.log("Packaging Charges:", "Rs." + extraCharges);
}

console.log("Final Bill:", "Rs." + order.finalBill);

     var cancel = prompt("Do you want to cancel the last order? (yes/no)");

if (cancel == "yes") {
            orders.pop();
            console.log("Last order cancelled!");
 }
   var remove = prompt("Do you want to remove the first pending order? (yes/no)");

        if (remove == "yes") {
            orders.shift();
            console.log("First pending order removed!");
        }

        console.log("Remaining Orders:", orders);
   if (quantity < 1) {
        alert("Invalid quantity! Please enter at least 1 plate.");
    }
else if (choice < 1 || choice > 4) {
    alert("Invalid item selection!");
}
else {
    alert("Invalid selection!");
}
    