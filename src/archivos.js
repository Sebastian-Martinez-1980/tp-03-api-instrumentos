const fs = require("node:fs/promises");
const path = require("node:path");

async function leerJson(ruta) {
try {
 const texto = await fs.readFile(ruta, "utf8");
 return JSON.parse(texto);
}
catch (error) {
 throw new Error(`Error al leer el archivo JSON: ${error.message}`);
 }
}

async function escribirTexto(ruta, contenido) {
try {
    const carpeta = path.dirname(ruta);
    await fs.mkdir(carpeta, { recursive: true });
    await fs.writeFile(ruta, contenido, "utf8");
}   catch (error) {
    console.error (`Error al escribir el archivo de texto: ${error.message}`);
    }
}

module.exports = {leerJson, escribirTexto};