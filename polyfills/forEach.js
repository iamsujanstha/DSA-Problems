const obj = { name: 'JS', lib: 'React' }

Object.prototype.forEach = function (cb) {
  Object.keys(this).forEach(function (key) {
    cb(key, this[key]);
  })
}

obj.forEach((key, value) => {
  console.log(key, value)
})


// Write a forEach prototype for Object