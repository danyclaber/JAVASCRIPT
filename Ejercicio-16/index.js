
const parrafos = document.querySelectorAll(".parrafo");
const seccion = document.querySelectorAll(".seccion")
console.log(parrafos);

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo = " + parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
    });
    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar el parrafo = " + parrafo.innerText);
        parrafo.classList.remove("dragging")
    })
});

seccion.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "link";
        console.log("Drag Over");

    });

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        console.log("Parrafo id: " + id_parrafo);

        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });
});

const img_papelera = document.querySelector(".imagen-papelera");
img_papelera.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "link";
    console.log("Drag Over");
});

img_papelera.addEventListener("drop", event => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    console.log("Parrafo id: " + id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    document.getElementById(id_parrafo).remove();
});