const nombre = "Christian";
const apellido = "Medrano";

const persona = { nombre: nombre, apellido: apellido }
//sessionStorage.setItem("persona", JSON.stringify(persona));
//localStorage.setItem("persona", JSON.stringify(persona));


//COOKIES//
const hoy = new Date();
//document.cookie = `persona-cookie =${JSON.stringify(persona)}; expires=${new Date(hoy.getTime() + 2 * 60000).toUTCString}`;

