# Trabajo práctico 03

## Descripción

El Sistema monta un servidor http, permitiendo acceder a datos de instrumentos - de un archivo json- ya sea a todos los registros, a algunos y a todos o algunos valores según alguna condición.

Los valores son: id, nombre, familia, origen, descripción y si está disponible

## Instalación

npm install

ejecuta npm para instalar los módulos necesarios luego de descargar el repositorio

## Ejecución

Si escribimos en la consola: npm start

ejecuta /src/node index.js

que se encuentra en package.json

se podrá acceder a al sistema mediante la url

http://localhost:3000

Para detener el servidor sep resionan las teclas Ctrl + "C"


## Endpoints

GET /                           Bienvenida

GET /api/instrumentos           Obtiene los instrumentos

GET /api/instrumentos?familia=  Obtiene los instrumentos según la familia

GET /api/instrumentos/:id        Obtiene el instrumento con el id 1

POST /api/instrumentos          Envía un registro por POST para agregar al array


## Ejemplos de solicitudes


GET /api/instrumentos?familia=cuerda

GET /api/instrumentos/33


## Códigos de estado

200 : OK, la solicitud se realizó correctamente
201 : Un nuevo recurso se creó correctamente
400 : Bad Request, la solicitud contiene datos incorrectos o incompletos
404 : Not Found, el recurso solicitado no existe


## Persistencia de los datos

No existe persistencia de datos porque los datos que se crean quedan en memoria y al cerrar el programa desaparecen.




Debe explicar:

- npm install: ejecuta npm para instalar los módulos necesarios luego de descargar el repositorio
 npm start: ejecuta /src/node index.js que se encuentra en package.json se podrá acceder a al sistema mediante la url

http://localhost:3000


- Cómo detener el servidor;
Ctrl + C


- Método y URL de cada endpoint;

- cuerpo necesario para POST;
- casos 200 , 201 , 400 y 404 ;
comentado en la parte de Endpoint

- diferencia entre parámetro de ruta y consulta;
Un parámetro de ruta menciona un recurso específico, como api/instrumento/:5

Una consulta utiliza el signo de interrogación ?
permitiendo buscar, filtrar, ordenar o modificar una consulta

- función de express.json() ;

Es un middleware de express que permite a un servidor recibir y entender datos en formato json en el body de una petición http.

- por qué las creaciones desaparecen al reiniciar.

No existe persistencia de datos porque los datos que se crean quedan en memoria y al cerrar el programa desaparecen.