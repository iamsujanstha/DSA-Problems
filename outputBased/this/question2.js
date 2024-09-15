var lenght = 4;

function callback() {
  console.log(this.lengh);
}

const object = {
  lengh: 5,
  method() {
    arguments[0](); // arguments is object and at index 0 'callback' is invoked with refers to argument object that has lenght 3
  }
};

object.method(callback, 1, 2) // argmunets.length=3