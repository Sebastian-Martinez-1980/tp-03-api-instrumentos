const path = require("node:path");
const express = require('express');
const { leerJson, escribirTexto } = require("./archivos.js");
const rutaDatos = path.join(__dirname, "..", "datos", "instrumentos.json");

async function main() {
    try {
        console.log("Leyendo instrumentos... ");
        const instrumentos = await leerJson(rutaDatos);
        console.log(instrumentos);

// Se verifica si están los datos seguir e iniciar el servidor
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
    res.status(200).json({ mensaje: "API de Instrumentos disponible" });
});

app.get('/api/instrumentos', (req, res) => {
    const familia = req.query.familia;
    if (!familia) {
         res.json(instrumentos);
    }

    const resultado = instrumentos.filter(instrumento => 
        instrumento.familia.toLowerCase() === familia.toLowerCase()
    );
    res.json(resultado);
});


//Buscar por id

app.get('/api/instrumentos/:id', async (req, res) => {
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