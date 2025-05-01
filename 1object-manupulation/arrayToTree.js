const data = [
  { id: 1, name: 'Root', parentId: null },
  { id: 2, name: 'Child 1', parentId: 1 },
  { id: 3, name: 'Child 2', parentId: 1 },
  { id: 4, name: 'Subchild 1', parentId: 2 }
];

function arrayToTree(data) {
  const idMap = {}; // id -> node map
  const tree = [];

  // Step 1: Create a map of id -> node
  data.forEach(item => {
    idMap[item.id] = { ...item, children: [] };
  });

  // Step 2: Build the tree
  data.forEach(item => {
    const node = idMap[item.id];
    if (item.parentId === null) {
      tree.push(node); // root node
    } else {
      idMap[item.parentId].children.push(node)
    }
  });

  return tree;
}

console.log(arrayToTree(data))

/* [
  {
    id: 1,
    name: 'Root',
    parentId: null,
    children: [
      {
        id: 2,
        name: 'Child 1',
        parentId: 1,
        children: [
          {
            id: 4,
            name: 'Subchild 1',
            parentId: 2,
            children: []
          }
        ]
      },
      {
        id: 3,
        name: 'Child 2',
        parentId: 1,
        children: []
      }
    ]
  }
]
 */