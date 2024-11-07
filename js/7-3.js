var lause = "Tähän tulee automaattisesti testattava lause";

function spottaaSiipielain() {
    const regex = /ab+c/;
    var tuloste;

    const match = lause.match(regex);
    if (match) {
        const index = lause.toLowerCase().indexOf(match[0].toLowerCase());
        tuloste = (" ".repeat(index) + lause.substring(index, index + 4)).toLowerCase();
    } else {
        tuloste = "RIKKI";
    }

    tuloste.test()

    console.log(lause);
    console.log(tuloste);
}