function laskuFunktio() {
    var luku = noudaArvo("luku");
    var eksp = noudaArvo("eksponentti");

    console.log("Luku " + luku + " potenssiin " + eksp + " on:");
    console.log(laskePotenssi(luku, eksp));
}

function noudaArvo(field) {
    return document.getElementById(field).value;
}

function laskePotenssi(luku, eksp){
    return Math.pow(luku, eksp);
}