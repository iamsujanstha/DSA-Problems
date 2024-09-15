function orderPizza() {
  console.log('Order pizza');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizzaType = "Cheese";
      console.log("Pizza is ready");
      resolve(pizzaType);
    }, 2000);
  });
}

function eatPizza(pizzaType) {
  console.log(`Eat the ${pizzaType} pizza`);
}

// Calling the function and handling the Promise
orderPizza()
  .then(pizzaType => {
    console.log('Pizza was Ordered');
    eatPizza(pizzaType);
  })
  .catch(error => {
    console.error('There was an error making the pizza:', error);
  });
