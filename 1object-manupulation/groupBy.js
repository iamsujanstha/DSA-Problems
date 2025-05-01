const data = [
  { id: 1, name: 'John', category: 'A' },
  { id: 2, name: 'Sara', category: 'B' },
  { id: 3, name: 'Mike', category: 'A' },
  { id: 4, name: 'Anna', category: 'C' },
  { id: 5, name: 'Emma', category: 'B' }
];

// function groupBy(data) {
//   let result = new Map();
//   for (let item of data) {
//     const { category } = item
//     if (!result.has(category)) {
//       result.set(category, [item])
//     }
//     else {
//       result.get(category).push(item)
//     }
//   }

//   return Object.fromEntries(result);
// }

function groupBy(data) {
  let result = {};
  for (let item of data) {
    const { category } = item
    if (!result[category]) {
      result[category] = [item]
    }
    else {
      result[category].push(item)
    }
  }

  return result;
}

console.log(groupBy(data))

/* {
  A: [
    { id: 1, name: 'John', category: 'A' },
    { id: 3, name: 'Mike', category: 'A' }
  ],
  B: [
    { id: 2, name: 'Sara', category: 'B' },
    { id: 5, name: 'Emma', category: 'B' }
  ],
  C: [
    { id: 4, name: 'Anna', category: 'C' }
  ]
}
 */