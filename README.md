## Instalación
*** Version de nodejs utilizada v16.16.0 ***
1. Clonar el proyecto

```git clone https://github.com/moldihec/back_gapsi.git```

2. Ejecutar

```cd gapsi_hapiv1 && npm install```

3. Iniciar el servidor

```node app.js```


========================================================
### NOTAS ADICIONALES ###
========================================================

1.- Tuve un pequeño inconveniente de funcionalidad en el API Rest cuando quito y agrego proveedores en el archivo db.json si se afecta correctamente pero si se refresca el front-end devuelve informacion de un estado anterior anterior aunque el archivo en el back si este modificado, al parecer es el cache del servidor nodejs pero debido al tiempo ya no pude darle solucion a este caso. Favor de tomarlo en consideracion.
