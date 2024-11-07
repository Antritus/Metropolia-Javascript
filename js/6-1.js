function Henkilo(nimi, tyo, palkka) {
    this.nimi = nimi;
    this.tyo = tyo;
    this.palkka = palkka;
    this.vertaaPalkka = function (henk) {
        var val = henk.palkka > this.palkka ? 1 : henk.palkka === this.palkka ? 0 : -1;
        switch (val){
            case  1:
                console.log(`${this.nimi} tienaa ${henk.palkka-this.palkka} vähemmän kuin ${henk.nimi}`)
                break;
            case 0:
                console.log(`${henk.nimi} tienaa yhtä paljon kuin ${this.nimi}`)
                break;
            case -1:
                console.log(`${this.nimi} tienaa ${this.palkka-henk.palkka} enemmän kuin ${henk.nimi}`)
                break
        }
    }
}

let henk1 = new Henkilo("Mikko", "JS-Koodari", 5000);
let henk2 = new Henkilo("Lea", "Python-koodari", 1500);
let henk3 = new Henkilo("Pena", "Opettaja", 1000);

console.log("Ensimmäisen henkilön nimi: " + henk1.nimi);
console.log("Toisen henkilön työ: " + henk2.tyo);
console.log("Kolmannen henkilön palkka: " + henk3.palkka + "\n")

henk1.vertaaPalkka(henk2);
henk3.vertaaPalkka(henk2);
henk3.vertaaPalkka(henk3);