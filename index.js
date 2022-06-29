const http = require("http");

const server = http.createServer((peticion, respuesta) => {
  const now = new Date();
  let mensaje = "";
  if (now.getHours() >= 6 && now.getHours() < 12) mensaje = "Buenos días";
  else if (now.getHours() >= 12 && now.getHours() < 19)
    mensaje = "Buenas tardes";

  //console.log("New request", new Date().toLocaleTimeString());
  respuesta.end(mensaje);
});

const connectedServer = server.listen(8080, () => {
  console.log(`Server running...`);
});
