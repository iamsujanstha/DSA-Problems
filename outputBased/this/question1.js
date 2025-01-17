var length = 4;
function callback() {
  console.log(this.length)
}

const object = {
  length: 5,
  method(callback) {
    callback(); // this callback function does not has any object to its left to refer so it refers to window or global object i.e lenght = 4;
  }
}

object.method(callback, 1, 2)