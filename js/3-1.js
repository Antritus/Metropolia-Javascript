function func() {
    console.log(document.getElementById("teksti").innerHTML);

    document.getElementById("teksti").innerHTML = "JavaScript on helppoa ja hauskaa!";

    console.log(document.getElementById("teksti").innerHTML);
}