var fib = (n) => {
  let a = 0,
    b = 1;
  let c = a + b;
  if (n <= 1) return n;
  else {
    for (let i = 0; i < n - 2; i++) {
      [a, b] = [b, c];
      c = a + b;
    }
  }
  return c;
};
