function groupObjValue(employees) {
  let salaryData = new Map();
  for (let { department, salary } of employees) {
    if (!salaryData.has(department)) {
      salaryData.set(department, { total: salary, count: 1 });
    }
    else {
      const existing = salaryData.get(department);
      salaryData.set(department, {
        total: existing.total + salary,
        count: existing.count + 1
      })
    }
  }
  let result = new Map();
  for (let [dep, { total, count }] of salaryData) {
    result.set(dep, total / count)
  }
  return Object.fromEntries(result)
}

const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { id: 2, name: "Bob", department: "Sales", salary: 50000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { id: 4, name: "David", department: "HR", salary: 45000 },
  { id: 5, name: "Eva", department: "Sales", salary: 60000 },
  { id: 7, name: "Eva", department: "Engineering", salary: 60000 },

];

console.log(groupObjValue(employees))

/*  output:
{
  Engineering: 70000,
  Sales: 55000,
  HR: 45000
}
 */