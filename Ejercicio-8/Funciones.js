
function returnTrue() {
    return true;
}
console.log(returnTrue());

//PROMESAS
async function miFuncionAsincrona() {
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hola Soy una Promesa");
            resolve();
        }, 5000)
    });
}

miFuncionAsincrona();

//FUNCIONES GENERADORAS DE PARES
function* generaPares() {
    let id = 0;
    while (true) {
        id = id + 2;
        yield id
    }
}

const gen = generaPares();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
