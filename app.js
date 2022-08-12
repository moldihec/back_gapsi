const Hapi = require('hapi');
const routes = require("./route");

const server = Hapi.server({
  port: 3001,
  host: 'localhost',
  routes: {
    cors: {
        origin: ['*'], // permite a todos la conexion   
        credentials: true // boolean - 'Access-Control-Allow-Credentials'
    }
},
  app: {}
});

const iniciarServer = async () => {
  try {
    await server.register(routes);  
    await server.start();
    console.log(`Servidor corriendo en: ${server.info.uri}`);
  } catch (error) {
    console.log('Error al iniciar el servidor Hapi');
  }
};

iniciarServer();