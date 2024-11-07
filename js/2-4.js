var alkulukuja = 0;
for (var i = 1; i < 60; i++){
    if (i > 1){
        var alkuluku = true;
        for (var j = 2; j < i; j++){
            if (i % j == 0){
                alkuluku = false;
                break;
            }
        }
        if (alkuluku){
            alkulukuja++;
            console.log(i);
        }
    }
}

console.log("Alkulukuja löydetty yhteensä: "+alkulukuja);