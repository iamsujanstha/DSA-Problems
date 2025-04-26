const company = {
  Engineering: {
    Frontend: ['Alice', 'Charlie'],
    Backend: ['Bob'],
  },
  HR: {
    Recruitment: ['David'],
    Operations: ['Eva', 'Frank'],
  },
};

/* OUTPUT
[
  { name: 'Alice', department: 'Engineering', team: 'Frontend' },
  { name: 'Charlie', department: 'Engineering', team: 'Frontend' },
  { name: 'Bob', department: 'Engineering', team: 'Backend' },
  { name: 'David', department: 'HR', team: 'Recruitment' },
  { name: 'Eva', department: 'HR', team: 'Operations' },
  { name: 'Frank', department: 'HR', team: 'Operations' },
]
 */

function flatenEmployee(company) {
  let result = [];
  for (let department in company) {
    let teams = company[department]
    for (let team in teams) {
      const members = teams[team];
      for (let name of members) {
        result.push({ name, department, team })
      }
    }
  }
  return result
}

console.log(flatenEmployee(company))