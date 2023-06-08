const obj =
{
    nombre: "Christian",
    apellido: "Medrano",
    edad: 27,
    altura: 1.73,
    isDeveloper: true
}

const varEdad = obj.edad;
console.log(obj.edad);

const objA =
{
    nombre: "Daniel",
    apellido: "Medina",
    edad: 26,
    altura: 1.60,
    isDeveloper: false
}

const objB =
{
    nombre: "Julio",
    apellido: "Zarate",
    edad: 28,
    altura: 1.70,
    isDeveloper: false
}
const listaObj = [{ ...obj }, objA ,  objB ];

console.log(listaObj);

const listaOrdenada = listaObj.sort((a, b) => a.edad - b.edad);
console.log(listaOrdenada);