const input = {
  "user_name": "Alice",
  "user_address": {
    "city_name": "Wonderland",
    "zip_code": {
      "postal_code": 12345
    }
  }
};

function camelCase(word) {
  let wordArr = word.split('_');
  let camelCase = [wordArr[0]];
  for (let i = 1; i < wordArr.length; i++) {
    camelCase.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1))
  }
  return camelCase.join('')
}

function deepCamelCaseKeys(obj) {
  let result = {};

  for (let key in obj) {
    let camelCaseKey = camelCase(key)
    if (!result[camelCaseKey]) result[camelCaseKey] = {}
    if (typeof obj[key] === 'object') {
      result[camelCaseKey] = deepCamelCaseKeys(obj[key])
    }
    else {
      result[camelCaseKey] = obj[key]
    }
  }
  return result;

}

console.log(deepCamelCaseKeys(input));