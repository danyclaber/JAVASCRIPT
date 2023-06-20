const boton = document.querySelector("#btn");
console.log(boton);
boton.addEventListener("click", () => {
    alert("Click en el boton");
});

$(document).ready(() => {
    $("#btn-jquery").click(() => {
        alert("Hola, estoy usando jQuery");
    });
});