var b = "break";

for (var i = 1; i < 20; i+=2) {
    console.log(i);
}

console.log(b);

for (var i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log(b);

for (var i = 4; i >= -3.5; i-=1.5) {
    console.log(i);
}

console.log(b);

var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

console.log(b);

var product = 1;

for (var i = 1; i <= 12; i++) {
    product *= i;
}

console.log(product);