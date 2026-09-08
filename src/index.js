const path = require("node:path");
const { leerJson } = require("./archivos.js");
const rutaDatos = path.join(__dirname, "..", "datos", "instrumentos.json");

async function main() {
    try {
        console.log("Leyendo instrumentos... ");
        const instrumentosJson = await leerJson(rutaDatos);
        console.log(instrumentosJson);

// Se verifica si están los datos seguir e iniciar el servidor
const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
    res.json({ mensaje: "API de Instrumentos disponible" });
});

app.get('/instrumentos', async (req, res) => {
    const nombre = req.query.nombre;
    if (nombre) {
        const resultado = instrumentosJson.filter(
            instrumento => instrumento.nombre.toLowerCase() === nombre.toLowerCase()
        );
         res.json(resultado);
    }
    res.json(instrumentosJson);
});


//Buscar por id

app.get('/instrumentos/:id', async (req, res) => {
    const instrumentos = await leerJson(rutaDatos);
    const id = Number(req.params.id);
    const instrumento = instrumentos.find(
        instrumento => instrumento.id === id
    );

    if (!instrumento) {
        return res.status(404).json({
            error: 'Instrumento no encontrado'
        });
    }
    res.json(instrumento);
});

// fin buscar por id

app.listen(PORT, ()=>{
    console.log(`Servidor disponible en http://localhost:${PORT}`);
});
    } catch (error) {
        console.error(`Error al generar el instrumento : ${error.message}`);
        process.exitCode = 1;
    }
}
main();