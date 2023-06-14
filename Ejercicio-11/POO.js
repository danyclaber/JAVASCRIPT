class Estudiante {
    #nombre;
    #asignatura = [];
    constructor(nombre, asignatura) {
        this.#nombre = nombre;
        this.#asignatura = asignatura;
    }
    getDatos() {
        return {
            nombre:this.#nombre,
            asignatura:this.#asignatura
        }
    }
}

const newEstudiante = new Estudiante("Christian", ["JavaScript", "HTML", "CSS"]);
console.log(newEstudiante.getDatos());