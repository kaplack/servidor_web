const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
let visitas = 0;

app.get("/", (request, response) => {
  response.send("<h1>Hola Insecto!</h1>");
});

app.get("/tutores", (request, response) => {
  response.send({ mensaje: "Saludos Tutores!" });
});

app.get("/hora", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});
app.get("/visita", (req, res) => {
  visitas++;
  res.send(`${visitas}`);
});

const server = app.listen(PORT, () => {
  console.log(`Server listening [${PORT}]...`);
});
server.on("error", (e) => console.log(`Error on server.`, e));
