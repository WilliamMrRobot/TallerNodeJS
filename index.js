let api = require('./Controlador_Usuarios');

const usuario1 = new api.Usuario("Andres","Medina", 54613245);
const usuario2 = new api.Usuario("Cosme", "landes", 51321515);
const usuario3 = new api.Usuario("Fulanito", "riaño", 54545454);

api.metodosUsuario.agregarUsuario(usuario1);

console.log(usuario1.nombre);
console.log(usuario2.nombre);
console.log(usuario3.nombre);
