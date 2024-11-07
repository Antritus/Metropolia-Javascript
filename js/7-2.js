var lause = "Tässä     lauseessa     on     liikaa  välejä.";
function lauseenKorjaus() {

    lause = lause
        .replace(/\s+/g, " ")
        .replace(/\bon\b/, "oli");

    console.log(lause);
}