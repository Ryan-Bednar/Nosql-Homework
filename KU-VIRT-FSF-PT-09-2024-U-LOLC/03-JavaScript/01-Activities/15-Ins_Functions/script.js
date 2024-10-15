function declareHello() {
  abstractHello("declaration");
  return;
}

const expressHello = function () {
  abstractHello("expression");
  return;
};

function abstractHello(functionType) {
  console.log(`Hello, I am a function ${functionType}.`);
}

declareHello();
expressHello();

declareHello();

function declareHelloAgain(x, y, z) {
  console.log(`Hello, the variables passed into me are ${x}, ${y}, ${z}.`);
  return;
}

declareHelloAgain(7, "Hello", true);
