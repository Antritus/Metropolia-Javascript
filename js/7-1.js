var lause = "J07ku7 k1rj01774v47 54n0j4 num3r0174 käy77ä3n.";

function tulostaNumerot() {
    var match = lause.match(/\d+/);

    if (match){
        console.log(match);
    } else {
        console.log("Ei numeroita!");
    }
}