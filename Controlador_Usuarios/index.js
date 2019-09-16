// primera forma:

// const usuario= require('./usuario.js')

// const Usuario= usuario.Usuario

// module.exports = {
//     Usuario
    
// }

//Segunda forma:

const Usuario= require('../Datos/usuario.js');

const fs=require('fs');




var metodosUsuario= {

    agregarUsuario(Usuario){

        var content=fs.readFileSync('./../Datos/listaUsuarios.json');
        console.log(content);
       
        var json=JSON.stringify(Usuario);
        
        fs.writeFile('./../Datos/listaUsuarios.json',json,'utf8',callback);
    
    },

    consultarUarios(){
        return listaUsuarios;
    }
}



module.exports = {
    Usuario, metodosUsuario    
}

