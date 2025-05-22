const data = [
  { code: 'A', name: 'animal' },
  { code: 'AA', name: 'human' },
  { code: 'AB', name: 'cat family' },
  { code: 'AAA', name: 'man' },
  { code: 'AAB', name: 'woman' },
  { code: 'ABA', name: 'lion' },
  { code: 'ABB', name: 'tiger' },
  { code: 'ABC', name: 'elephant' },
  { code: 'B', name: 'birds' },
  { code: 'BA', name: 'flying birds' },
  { code: 'BB', name: 'non-flying birds' },
  { code: 'BAA', name: 'pigeon' },
  { code: 'BAB', name: 'crow' },
  { code: 'BBA', name: 'ostrich' }
]

function makeHierarchy(data) {
  const map = {};
  let result = [];

  for (let item of data) {
    map[item.code] = { ...item, children: [] }
  }

  for (let item of data) {
    const parentCode = item.code.slice(0, -1);
    if (parentCode && map[parentCode]) {
      map[parentCode].children.push(map[item.code])
    }
    else {
      result.push(map[item.code])
    }
  }

  return result;
}

console.log(makeHierarchy(data))

