const orders = [
  { orderId: 1, customer: 'Alice', amount: 50 },
  { orderId: 2, customer: 'Bob', amount: 30 },
  { orderId: 3, customer: 'Alice', amount: 70 },
  { orderId: 4, customer: 'Charlie', amount: 100 },
  { orderId: 5, customer: 'Bob', amount: 25 },
];
/* {
  Alice: {
    totalAmount: 120,
    orders: [1, 3]
  },
  Bob: {
    totalAmount: 55,
    orders: [2, 5]
  },
  Charlie: {
    totalAmount: 100,
    orders: [4]
  }
}
 */
function groupOrdersByCustomers(orders) {
  const result = new Map();
  orders.forEach(({ customer, amount, orderId }) => {
    if (!result.has(customer)) {
      result.set(customer, { totalAmount: amount, orders: [orderId] })
    }
    else {
      let existingCustomer = result.get(customer);
      existingCustomer.totalAmount += amount;
      existingCustomer.orders.push(orderId);

      // result.set(customer, existingCustomer)
    }
  })

  return Object.fromEntries(result);
}

console.log(groupOrdersByCustomers(orders))