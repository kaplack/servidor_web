//import express from "express";
const express = require("express");

//import { Contenedor } from "./index.js";
const Contenedor = require("./index");

const test1 = new Contenedor("productos.txt");
const item1 = {
  title: "escuadra",
  price: 123.45,
  thumbnail:
    "https://www.demaquinasyherramientas.com/wp-content/uploads/2012/12/Escuadra-Combinada.png",
};

const item2 = {
  title: "lavadora",
  price: 350,
  thumbnail:
    "https://hiraoka.com.pe/media/mageplaza/blog/post/l/a/lavadora-consejos_5.jpg",
};
const item3 = {
  title: "celular",
  price: 400,
  thumbnail: "https://f.rpp-noticias.io/2021/05/31/1101720img-2704jpg.jpg",
};

//test1.deleteAll();
// test1.save(item1);
// test1.save(item2);
// test1.save(item3);

const app = express();
const PORT = process.env.PORT || 8080;
let visitas = 0;

app.get("/", (request, response) => {
  response.send(test1.getAll());
});

app.get("/productoRandom", (request, response) => {
  let id = Math.floor(Math.random() * 3) + 1;
  response.send(test1.getById(id));
  //console.log(`Id: ${id}`);
});

// app.get("/hora", (req, res) => {
//   res.send(new Date().toLocaleTimeString());
// });
// app.get("/visita", (req, res) => {
//   visitas++;
//   res.send(`Visitantes: ${visitas}`);
// });

const server = app.listen(PORT, () => {
  console.log(`Server listening [${PORT}]...`);
});

server.on("error", (e) => console.log(`Error on server.`, e));
