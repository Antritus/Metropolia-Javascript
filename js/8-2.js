var kauppa = new Object();

kauppa.asiakasrekisteri = (function(){
    var rekisteri = [];

    function asiaakkaanTiedot(id){
        if (id >= rekisteri.length) {
            console.log("Liian korkea ID!")
        } else {
            console.log(`${id}: ${rekisteri[id].sukunimi} ${rekisteri[id].nimi}`)
        }
    }

    function lisaa(etunimi, sukunimi) {
        const length = rekisteri.push({nimi: etunimi, sukunimi: sukunimi})-1;
        console.log(`Lisätty asiakas ID:llä ${length}`);
    }

    function asiakasLista() {
        console.log("Tulostetaan kaikki asiakkaat:");
        for (var i = 0; i < rekisteri.length; i++){
            console.log(`${i}: ${rekisteri[i].sukunimi} ${rekisteri[i].nimi}`)
        }
    }

    return {
        asiakkaanTiedot: asiaakkaanTiedot,
        lisaa: lisaa,
        asiakasLista: asiakasLista
    }
})();

kauppa.asiakasrekisteri.asiakkaanTiedot(0);
kauppa.asiakasrekisteri.lisaa("Matti", "Meikäläinen");
kauppa.asiakasrekisteri.lisaa("Hanna", "Huippukoodari");
kauppa.asiakasrekisteri.asiakkaanTiedot(1);
kauppa.asiakasrekisteri.lisaa("Kerttu", "Leppä");
kauppa.asiakasrekisteri.lisaa("Simo", "Hillo");
kauppa.asiakasrekisteri.asiakasLista();