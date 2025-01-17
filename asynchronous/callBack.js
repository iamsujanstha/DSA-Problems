function orderPizza(callback) {
  console.log('Order pizza')

  setTimeout(() => {
    const pizzaType = "Cheese"
    console.log("Pizza is ready");
    callback(pizzaType);
  }, 2000)

  console.log('Pizza was Ordered')
}

function callback(pizzaType) {
  console.log(`Eat the ${pizzaType} pizza`)
}

orderPizza(callback);