function puolitus(numero){
    return numero/2;
}
function nelio(numero){
    return numero*numero;
}

function toisto(maara, numero, funktio){
    if (maara < 1){
        return "Toistoja tulee olla ainakin yksi!";
    }
    var i = 0;
    while (i < maara) {
        numero = funktio(numero);
        i++;
    }
    return numero;
}


console.log(puolitus(50));
console.log(toisto(5, 200, puolitus));
console.log(toisto(3,5, nelio));
console.log(toisto(-1, 99, puolitus));