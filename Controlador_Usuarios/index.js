var usuarios = require('./../Datos/usuario.js');

var Usuario = function(nombre, apellido, telefono){
    this.nombre= nombre;
    this.apellido= apellido;
    this.telefono= telefono;	
}

// class methods
Usuario.prototype.agregarUsuario = function() {
  usuarios.push(this);
};

Usuario.prototype.consultarUsuarios = function() {
  return usuarios;
};

//*** IMPORTANTE ***/
// Existen dos tipos diferentes de exportación , nombrada y por defecto. 
// Se pueden tener varias exportaciones nombradas por módulo 
// pero sólo una exportación por defecto.

module.exports = Usuario;