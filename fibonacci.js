var sumEven = 0;
var fibonacci = [1];
var j = 1;

for (var i = 1; i <= 4000000; i += j) {
    fibonacci.push(i);
    j = fibonacci[fibonacci.length - 2];
    if (i % 2 === 0) {
        sumEven += i;
    }
};

alert(sumEven)
