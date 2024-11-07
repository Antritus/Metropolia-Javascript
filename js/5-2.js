function loop(value, check, reduce, print){
    while (check(value)){
        print(value);
        value = reduce(value);
    }
}

var value = 3;

var greaterThanZero = function (n) {
    return n > 0;
}

var reduceOne = function (n) {
    return n - 1;
}

var printValue = function (n) {
    console.log(n);
}

loop(value, greaterThanZero, reduceOne, printValue);
loop(value, greaterThanZero, reduceOne, printValue);