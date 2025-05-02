const data = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345
    }
  }
};

function getValueByPath(data, path) {
  return path.split('.').reduce((acc, curr) => {
    return acc?.[curr]
  }, data)
}


console.log(getValueByPath(data, "user.address.city"))