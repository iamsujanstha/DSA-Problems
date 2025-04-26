const employees = [
  { name: 'Alice', skills: ['JavaScript', 'React', 'CSS'] },
  { name: 'Bob', skills: ['JavaScript', 'Node.js'] },
  { name: 'Charlie', skills: ['CSS', 'HTML', 'React'] },
  { name: 'David', skills: ['JavaScript', 'React', 'HTML'] },
];

/* {
  JavaScript: 3,
  React: 3,
  CSS: 2,
  Node.js: 1,
  HTML: 2
}
 */

function countSkills(employees) {
  return employees.reduce((acc, { skills }) => {
    skills.forEach(skill => {
      acc[skill] = (acc[skill] || 0) + 1;
    });
    return acc;
  }, {})
}

console.log(countSkills(employees))