// Black friday discount calculator

function calculateDiscountPrice(price, discountPercetaje) {
    const discount = (price * discountPercetaje) / 100
    const priceWithDiscount =  price - discount

    return priceWithDiscount
}

const orginalPrice = 100;
const discountPercetaje = 20;
const finalPrice = calculateDiscountPrice(orginalPrice, discountPercetaje);

console.log("Original price: $" + orginalPrice);
console.log("Discount Percetaje: " + discountPercetaje + "%");
console.log("Price with discount: $" + finalPrice);