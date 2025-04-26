/* Given an array of user objects with nested properties and arrays

  Filter users who are admins and live in a specific city(e.g., "New York").
  Group the filtered users by their primary role(first role in their roles array).
  For each group, sort users by age(ascending) and transform each user to include only their name, age, and a new property roleCount(number of roles).
  Handle edge cases(e.g., empty arrays, missing properties, invalid data).
  
. */

const users = [
  { id: 1, name: "Alice", age: 30, roles: ["admin", "editor"], address: { city: "New York", zip: 10001 } },
  { id: 2, name: "Bob", age: 25, roles: ["user"], address: { city: "San Francisco", zip: 94105 } },
  { id: 3, name: "Charlie", age: 35, roles: ["editor"], address: { city: "New York", zip: 10002 } },
  { id: 4, name: "Diana", age: 28, roles: ["admin", "user"], address: { city: "New York", zip: 10003 } },
  { id: 5, name: "Eve", age: null, roles: [], address: { city: "New York", zip: 10004 } }, // Edge case
  { id: 6, name: "Frank", age: 40, roles: ["admin"], address: null } // Edge case
];
/*  Output:
{
  admin: [
    { name: "Diana", age: 28, roleCount: 2 },
    { name: "Alice", age: 30, roleCount: 2 }
  ]
} */

function filterUser(users) {
  return users.reduce((acc, curr) => {
    if (curr.roles.includes('admin') && curr.address?.city === "New York") {
      acc.admin.push({
        name: curr.name,
        age: curr.age,
        roleCount: curr.roles.length
      })
    }
    return acc;
  }, { admin: [] })
}

console.log(filterUser(users))
