function func(a) {
  return function(b) {
    return a + b;
  }
};

console.log(func(6)(12));
