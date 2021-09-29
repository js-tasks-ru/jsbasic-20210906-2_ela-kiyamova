let calculator = {

  a: 0,
  b: 0,
  sum() {
    return (this.a + this.b);
  },

  mul() {
    return (this.a * this.b);
  },

  read(a, b) {
    this.a = a;
    this.b = b;
  }
};

window.calculator = calculator;

calculator.read(3, 5);
calculator.sum();
calculator.mul();



