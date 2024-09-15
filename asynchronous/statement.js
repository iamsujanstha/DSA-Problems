let pizzaType;
function orderPizza() {
  console.log('Order pizza');
  setTimeout(() => {
    pizzaType = 'Cheeze';
    console.log('Piza is ready')
  }, 1000)

  console.log('Pizza was ordered')
}

orderPizza();
console.log(`Eat ${pizzaType} piza`)


//JavaScript runs synchronously by default, but certain operations (e.g., network requests, file reading, or timers) are asynchronous.