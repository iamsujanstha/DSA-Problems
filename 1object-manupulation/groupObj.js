const employees = [
  { name: 'Alice', department: 'Engineering' },
  { name: 'Bob', department: 'Engineering' },
  { name: 'Charlie', department: 'HR' },
  { name: 'David', department: 'HR' },
  { name: 'Eva', department: 'Marketing' },
];

/* OUTPUT
  {
  Engineering: ['Alice', 'Bob'],
  HR: ['Charlie', 'David'],
  Marketing: ['Eva']
}
 */

function groupEmployee(employees) {
  const result = new Map();

  employees.forEach(({ name, department }) => {
    if (!result.has(department)) {
      result.set(department, [name])
    }
    result.get(department).push(name)
  })
  return Object.fromEntries(result);
}

console.log(groupEmployee(employees))


function groupEmployee(employees) {
  return employees.reduce((acc, { name, department }) => {
    acc[department] = acc[department] || [];
    acc[department].push(name);
    return acc;
  }, {});
}
