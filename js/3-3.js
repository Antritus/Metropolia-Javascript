function tervehdi() {
    console.log("Moikka!");
}

function lisaaPainike() {
    let element = document.createElement("button");
    element.innerHTML = "NAPPI";
    element.setAttribute("id", "luotuPainike");
    element.setAttribute("onclick", "tervehdi()");

    document.body.appendChild(element);
}