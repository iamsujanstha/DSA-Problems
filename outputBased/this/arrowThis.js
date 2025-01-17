const obj = {
  data: [1, 2, 3],
  processData: function () {
    this.data.forEach((num) => {
      console.log(num * this.multiplier);  // here this is refer to its parent i.e 'processData'
    });
  },
  multiplier: 2
};

obj.processData(); // here processData is called on obj so `this` of process data is refer to obj and the obj has multiplier so `this.multiplier` is executed lexically.