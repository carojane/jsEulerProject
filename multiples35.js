var sumMultiples = 0;

for (var i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sumMultiples += i
  };
};

console.log(sumMultiples)
