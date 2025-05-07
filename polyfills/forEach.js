
const obj = { name: 'JS', lib: 'React' };

Object.prototype.forEach = function (cb) {
  Object.keys(this).forEach((key) => { // Arrow function ensures `this` refers to the current object,i.e for dynamic obj
    cb(key, this[key]); // Access the value using `this[key]`
  });
};


obj.forEach((key, value) => {
  console.log(key, value);
});


function forEachObject(obj, cb) {
  Object.keys(obj).forEach((key) => {
    cb(key, obj[key]);
  });
}

forEachObject(obj, (key, value) => {
  console.log(key, value);
}); 