const add = function(a, b) {
	if (a >= 0 || b >= 0) {
  return a + b;
  }
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(ar) {
  if (ar.length === 0) {
    return 0;
  } else {
    const arSum = ar.reduce((prev, curr) => prev + curr);
    return arSum;
  }
};

const multiply = function(ar) {
  const multSum = ar.reduce((prev, curr) => prev * curr);
  return multSum;
};

const power = function(a ,b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) return 1;
  else return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


