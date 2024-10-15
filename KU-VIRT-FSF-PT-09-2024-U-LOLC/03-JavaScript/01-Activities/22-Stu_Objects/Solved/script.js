// WRITE YOUR CODE BELOW
const customerDrink = {
  name: "coffee",
  sugars: 3,
  isReady: true,
};

console.log(customerDrink);

if (customerDrink.isReady) {
  console.log(
    `Ready for pick-up ${customerDrink.name} with ${customerDrink.sugars}`
  );
} else {
  console.log(`Still in order queue: ${customerDrink.name}`);
}

for (const key in customerDrink) {
  const element = customerDrink[key];
  console.log(element);
}

for (const [key, value] of Object.entries(customerDrink)) {
  console.log(key, value);
}
