let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  },
  newData: {
    thing: {
      go: 20,
      away: 'master'
    }
  }
};

function searchJsObject(obj, item) {
  if (obj === null || typeof obj !== 'object') return false;

  let entries = Object.entries(obj);

  if (entries.length === 0) return false;

  let [key, value] = entries[0];

  if (value === item) return true;

  if (typeof value === 'object' && searchJsObject(value, item)) {
    return true;
  }

  return searchJsObject(Object.fromEntries(entries.slice(1)), item)

}

console.log(searchJsObject(nestedObject, 20));
console.log(searchJsObject(nestedObject, 'foo2'));
console.log(searchJsObject(nestedObject, 'nonexistent'));
