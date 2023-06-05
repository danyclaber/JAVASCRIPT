
const array = ["platano", "cebolla", "pollo", "avena", "manzana"];
array.push("aceite girasol");
console.log(array);
array.pop();
console.log(array);

const objPeliculas = [
    { titulo: "Avenger", director: "Anthony Russo", fecha: new Date(2022, 05, 26) },
    { titulo: "Batman el Caballero de la Noche", director: "Christopher Nolan", fecha: new Date(2008, 07, 18) },
    { titulo: "Spiderman", director: "San Raimi", fecha: new Date(2002, 05, 29) }
];
console.log(objPeliculas);

const peliculasPosteriores = objPeliculas.filter(o => o.fecha >new Date(2010, 01, 01));
console.log(peliculasPosteriores);

const directores = objPeliculas.map(o => o.director);
console.log(directores);

const titulos = objPeliculas.map(o => o.titulo);
console.log(directores);

const titulo_director = titulos.concat(directores);
console.log(titulo_director);

const tituto_director_prop = [...titulos,...directores];
console.log(tituto_director_prop);



