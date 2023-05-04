let nombre = "Christian Daniel";
let apellido = "Medrano Kantuta";
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

let estudianteMayus = nombre.toUpperCase() +" "+ apellido.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = nombre.toLowerCase() +" "+ apellido.toLowerCase();
console.log(estudianteMinus);

let lengthEstudiante = estudiante.length;
console.log(lengthEstudiante);

let primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre);

let ultimaLetraApellido = apellido.charAt(apellido.length-1);
console.log(ultimaLetraApellido);

let eliminarEspacios = estudiante.replace(/ /g ,"");
console.log(eliminarEspacios);

let verificaNombre = estudiante.includes(nombre);
console.log(verificaNombre);