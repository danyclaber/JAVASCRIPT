const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date("March 03 1997");
console.log(fechaNacimiento);

const mayor = fechaHoy > fechaNacimiento;
console.log(mayor);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth()+1;
console.log(mesNacimiento);

const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);
