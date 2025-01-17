function orderPizza() {
  console.log('Order pizza');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error by using a random number
      const errorOccurred = Math.random() < 0.5; // 50% chance of error
      if (errorOccurred) {
        reject(new Error('Failed to make the pizza'));
      } else {
        const pizzaType = "Cheese";
        console.log("Pizza is ready");
        resolve(pizzaType);
      }
    }, 2000);
  });
}

function eatPizza(pizzaType) {
  console.log(`Eat the ${pizzaType} pizza`);
}

// Define an async function to use await
async function processPizza() {
  try {
    const pizzaType = await orderPizza(); // Wait for the pizza to be ready
    console.log('Pizza was Ordered');
    eatPizza(pizzaType); // Eat the pizza
  } catch (error) {
    console.error('There was an error making the pizza:', error.message);
  }
}

// Call the async function
processPizza();
