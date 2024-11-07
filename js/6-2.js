function Henkilo(etunimi, sukunimi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
}
Henkilo.prototype.nimi = function() {return (this.sukunimi + " " + this.etunimi)}

function Asiakas(etunimi, sukunimi, id, kulut) {
    Henkilo.call(this, etunimi, sukunimi);
    this.id = id;
    this.kulut = kulut;
}
Asiakas.prototype = new Henkilo();
Asiakas.prototype.bonus = function(){ return this.kulut >= 5000 ? "kulta" : this.kulut >= 1000 ? "hopea" : "perus"};

var henkilo = new Henkilo("Kerttu", "Leppä");
var asiakas1 = new Asiakas("Matti", "Meikäläinen", 1);
var asiakas2 = new Asiakas("Hanna", "Huippukoodari", 2, 1500);
var asiakas3 = new Asiakas("Gilbert", "Goldson", 3, 8000);

console.log(henkilo.nimi());
console.log(asiakas1.nimi());
console.log(asiakas1.bonus());
console.log(asiakas2.nimi());
console.log(asiakas2.bonus());
console.log(asiakas3.nimi());
console.log(asiakas3.bonus());