const employees = [
  { name: 'Alice', department: 'Engineering', role: 'Frontend' },
  { name: 'Bob', department: 'Engineering', role: 'Backend' },
  { name: 'Charlie', department: 'HR', role: 'Recruiter' },
  { name: 'David', department: 'Engineering', role: 'Frontend' },
  { name: 'Eva', department: 'HR', role: 'Coordinator' },
  { name: 'Frank', department: 'Engineering', role: 'Backend' },
];

/* {
  Engineering: {
    Frontend: ['Alice', 'David'],
    Backend: ['Bob', 'Frank']
  },
  HR: {
    Recruiter: ['Charlie'],
    Coordinator: ['Eva']
  }
}
 */

function nestEmployees(employees) {
  let result = {};
  employees.forEach(({ department, role, name }) => {
    if (!result[department]) {
      result[department] = {}
    }
    if (!result[department][role]) {
      result[department][role] = []
    }
    result[department][role].push(name)
  });

  return result;
}

console.log(nestEmployees(employees))