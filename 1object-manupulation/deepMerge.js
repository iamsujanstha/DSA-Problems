const obj1 = {
  user: {
    name: "Alice",
    age: 25,
    preferences: {
      theme: "light",
      notifications: true
    }
  },
  status: "active"
};

const obj2 = {
  user: {
    age: 30,
    preferences: {
      notifications: false
    }
  },
  status: "inactive"
};


function deepMerge(obj1, obj2) {
  let result = { ...obj1 };

  for (let key in obj2) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val2 === 'object' && val1 && val2 && !Array.isArray(obj1) && !Array.isArray(obj2)) {
      result[key] = deepMerge(val1, val2)
    }
    else {
      result[key] = val2
    }
  }

  return result;
}

console.log(deepMerge(obj1, obj2));