const proveedor = require("./bd.json")
const fs = require('fs');
const users = {
    1: {
      username: "Candidato 01",
      email: "candidato01@gapsi.com",
     version: "1.0" 
    },
    2: {
        username: "Candidato 02",
        email: "candidato02@gapsi.com",
       version: "2.0" 
      }
  }

module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
      server.route([
       
        {
            method: 'GET',
            path: '/usuarios/{id?}',
            handler: async (req, res) => {
                req.params.nombre
                const user = users[req.params.id]
                return res.response({
                    datos: [user]
                  }).type('application/json');
                
            }
          },
          {
            method: 'GET',
            path: '/proveedores',
            handler: async (req, res) => {                
                return proveedor;
                
            }
          },
         
          {
            method: 'GET',
            path: '/proveedores/{nombre}',
            handler: async (req, res) => {
              
                var nuevoArchivo=[];
                    fs.readFile('bd.json',function(err,content){
                    if(err) throw err;
                    var parseJson = JSON.parse(content);
                        parseJson.forEach((el, index) => {    
                            if (el.nombre === req.params.nombre) {        
                            }
                            else{
                            nuevoArchivo.push({nombre:el.nombre,rfc:el.rfc,direccion:el.direccion})
                            }
                        });  
                    fs.writeFile('bd.json',JSON.stringify(nuevoArchivo),function(err){
                        if(err) throw err;
                    })
                    })
              return res.response({
                mensaje: `Provedor: ${req.params.nombre} eliminado exitósamente!`
              }).type('application/json');
            }
          },

          {
            method: 'GET',
            path: '/proveedores/agrega/{nombre}/rfc/{rfc}/direccion/{direccion}',
            handler: async (req, res) => {
                             
            fs.readFile('bd.json',function(err,content){
                     if(err) throw err;
                 var parseJson = JSON.parse(content);
                    parseJson.push({nombre:req.params.nombre,rfc:req.params.rfc,direccion:req.params.direccion})
                        fs.writeFile('bd.json',JSON.stringify(parseJson),function(err){
                        if(err) throw err;
                         })
                    })
              return res.response({
                mensaje: `Provedor: ${req.params.nombre} agregado exitósamente!`
              }).type('application/json');
            }
          },

       
      ]);
    }
  }