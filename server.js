const http = require("http");

const tareas = [
  { nombre: "Estudiar" },
  { nombre: "Hacer tarea" },
  { nombre: "Subir proyecto" }
];

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(tareas));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Servidor funcionando");
});