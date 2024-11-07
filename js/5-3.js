
function checkFunc(arr) {
    for (var i = 0; i < arr.length; i++){
        if (isNaN(arr[i])) {
//            console.log(arr[i]);
            return false;
        }
    }
    return true;
}
function combineFunc(arr) {
    console.log("Taulukossa tekstiä. Yhdistetään sanat:");
    var builder = arr[0];
    for (var i = 1; i < arr.length; i++){
        builder = `${builder} ${arr[i]}`;
    }
    // Why does this need a space in the end...
    builder = `${builder} `;
    return builder;
}

function sumFunc(arr) {
    console.log("Taulukossa vain lukuja. Lasketaan summa:");
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
//        console.log(arr[i]);
    }
    return sum;
}


var array1 = ["Tämän", "taulukon", "alkiot", "muodostavat", "lauseen"];
var array2 = [3, 5, 7, 8, 9, 11, 13, 15, 16, 17, 19, 20];
var array3 = [5, "kertaa", 3, "on", 15];

function someFunction(arr, f1, f2, f3) {
    if (!f1(arr)) {
        console.log(f2(arr));
    }
    else {
        console.log(f3(arr));
    }
}

someFunction(array1, checkFunc, combineFunc, sumFunc);
someFunction(array2, checkFunc, combineFunc, sumFunc);
someFunction(array3, checkFunc, combineFunc, sumFunc);
someFunction(array3, checkFunc, combineFunc, sumFunc);