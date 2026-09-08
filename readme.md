# Trabajo práctico 03
## Descripción
## Instalación
## Ejecución
## Endpoints
## Ejemplos de solicitudes
## Códigos de estado
## Persistencia de los datos

## Descripción
En este trabajo práctico se desarrolla una API HTTP utilizando Node.js y Express para administrar información sobre instrumentos musicales.
La API permite realizar operaciones para consultar, crear, modificar y eliminar instrumentos mediante diferentes métodos HTTP.
Cada instrumento contiene información como:
•	id 
•	nombre 
•	familia 
•	origen 
•	descripcion 
•	disponible 

Los datos se manejan mediante endpoints que reciben y devuelven información en formato JSON.
El proyecto permite practicar el funcionamiento de una API REST, los métodos HTTP, los parámetros de ruta, los parámetros de consulta, el envío de datos y los códigos de estado HTTP.

## Instalación
Para instalar el proyecto primero debemos abrir una terminal dentro de la carpeta del proyecto.
Luego ejecutamos:
npm install express
Este comando instala todas las dependencias necesarias que están indicadas en el archivo package.json.

Entre las dependencias utilizadas se encuentra Express, que permite crear el servidor HTTP y definir los diferentes endpoints de la API.

Después de ejecutar npm install, se crea la carpeta:
node_modules/
que contiene las dependencias instaladas.

También se utiliza el archivo:
package-lock.json
para registrar las versiones exactas de las dependencias instaladas.

## Ejecución
Para iniciar el servidor se utiliza:
npm start
Este comando ejecuta el script start definido en package.json.
Por ejemplo:
{
  "scripts": {
    "start": "src/node index.js"
  }
}
Por lo tanto, npm start ejecuta:
node index.js
Si el servidor está configurado para utilizar el puerto 3000, podremos acceder a la API mediante:
http://localhost:3000


## Endpoints
Los endpoints disponibles en la API son los siguientes:
Método	URL	Descripción
GET	/instrumentos	Obtiene todos los instrumentos
GET	/instrumentos/:id	Obtiene un instrumento por su ID


Parámetro de ruta
En:
/instrumentos/:id
id es un parámetro de ruta.
Por ejemplo:
/instrumentos/3
El valor 3 se obtiene mediante:
req.params.id


## Ejemplos de solicitudes
Obtener todos los instrumentos
GET http://localhost:3000/instrumentos/
Respuesta:
[
  {
    "id": 1,
    "nombre": "Guitarra",
    "familia": "Cuerda",
    "origen": "España",
    "descripcion": "Instrumento de cuerda pulsada.",
    "disponible": true
  }
]

# Obtener un instrumento específico
Para obtener el instrumento con ID 1:
GET http://localhost:3000/instrumentos/1
El servidor utiliza:
req.params.id
para obtener el número 1.

## Códigos de estado

Caso Solicitud Estado esperado
Bienvenida GET / 200
Listado GET /api/instrumentos 200
Filtro con coincidencias GET /api/instrumentos?familia=... 200
Filtro sin coincidencias GET /api/instrumentos?familia=inexistente 200
Detalle existente GET /api/instrumentos/1 200
Detalle inexistente GET /api/instrumentos/999 404
Creación válida POST /api/instrumentos 201
Creación sin nombre POST /api/instrumentos 400
Creación con disponible: false POST /api/instrumentos 201

La API utiliza diferentes códigos de estado HTTP para informar el resultado de cada operación.


## Persistencia de los datos
En esta versión del proyecto, los instrumentos pueden estar almacenados en un arreglo de JavaScript en memoria.
Por ejemplo:
let instrumentos = [
  {
    id: 1,
    nombre: "Guitarra",
    familia: "Cuerda",
    origen: "España",
    descripcion: "Instrumento de cuerda pulsada.",
    disponible: true
  }
];
