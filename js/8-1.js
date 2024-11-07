const viikonPaiva = (function() {
    const nimet = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
    var lkm = function() {
        return nimet.length;
    };

    var nimi = function(num) {
        return nimet[num];
    };

    var numero = function(name){
        for (var i = 0; i < lkm(); i++){
            if (nimi(num) == name){
                return num;
            }
        }
        return 0;
    };

    return {
        lkm: lkm,
        nimi: nimi,
        numero: numero
    };
})();

var num = 0;

console.log("Viikossa on " + viikonPaiva.lkm() + " päivää.");
console.log("Ohjelmoinnissa päivän " + viikonPaiva.nimi(num) + " indeksi on yleensä " + viikonPaiva.numero(viikonPaiva.nimi(num)));