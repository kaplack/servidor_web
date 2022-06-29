// CLASE Coderhouse
// const http = require("http");

// const server = http.createServer((peticion, respuesta) => {
//   const now = new Date();
//   let mensaje = "";
//   if (now.getHours() >= 6 && now.getHours() < 12) mensaje = "Buenos días";
//   else if (now.getHours() >= 12 && now.getHours() < 19)
//     mensaje = "Buenas tardes";

//   //console.log("New request", new Date().toLocaleTimeString());
//   respuesta.end(mensaje);
// });

// const connectedServer = server.listen(8080, () => {
//   console.log(`Server running...`);
// });
import fs from "fs";

export class Contenedor {
  constructor(archivo) {
    (this.nombre = archivo), (this.id = 1);
  }

  save(objeto) {
    try {
      const files = fs.readdirSync("./data");
      let data = fs.readFileSync(`./data/${this.nombre}`, "utf-8");

      if (files.some((file) => file == this.nombre) && data != "") {
        data = JSON.parse(data);
        let ids = data.map((value) => {
          return value.id;
        });
        const idn = parseInt(Math.max(...ids) + 1);
        console.log(idn);
        objeto = { ...objeto, id: idn };
        data.push(objeto);
        data = JSON.stringify(data);

        fs.writeFileSync(`./data/${this.nombre}`, data, "utf-8");

        console.log("si existe");
      } else {
        objeto = { ...objeto, id: this.id };
        objeto = JSON.stringify(Array(objeto));
        fs.writeFileSync(`./data/${this.nombre}`, objeto, "utf-8");
        console.log("el archivo se creo");
      }
    } catch (error) {
      console.log(error, "hubo un error");
    }
  }

  getById(Number) {
    try {
      let data = fs.readFileSync(`./data/${this.nombre}`, "utf-8");
      data = JSON.parse(data);
      const idData = data.filter((item) => item.id == Number);
      return idData;
    } catch (error) {
      console.log("hay un problema");
    }
  }

  getAll() {
    try {
      let data = fs.readFileSync(`./data/${this.nombre}`, "utf-8");
      data = JSON.parse(data);
      return data;
    } catch (error) {
      console.log("hay un problema");
    }
  }

  deleteById(Number) {
    try {
      let data = fs.readFileSync(`./data/${this.nombre}`, "utf-8");
      data = JSON.parse(data);
      let idData = data.filter((item) => item.id != Number);
      idData = JSON.stringify(idData);
      fs.writeFileSync(`./data/${this.nombre}`, idData, "utf-8");
      return idData;
    } catch (error) {
      console.log("hay un problema");
    }
  }

  deleteAll() {
    fs.writeFileSync(`./data/${this.nombre}`, "", "utf-8");
  }
}

// const test1 = new Contenedor("productos.txt");
// item1 = {
//   title: "escuadra",
//   price: 123.45,
//   thumbnail:
//     "https://www.demaquinasyherramientas.com/wp-content/uploads/2012/12/Escuadra-Combinada.png",
// };

// item2 = {
//   title: "lavadora",
//   price: 350,
//   thumbnail:
//     "https://hiraoka.com.pe/media/mageplaza/blog/post/l/a/lavadora-consejos_5.jpg",
// };
// item3 = {
//   title: "celular",
//   price: 400,
//   thumbnail: "https://f.rpp-noticias.io/2021/05/31/1101720img-2704jpg.jpg",
// };

// test1.deleteAll();
// test1.save(item1);
// test1.save(item2);
// test1.save(item3);
// console.log("el item con el id 2 es:", test1.getById(2));
// //test1.deleteById(1);
// console.log("Estos son todos los productos:", test1.getAll());
// //test1.deleteAll();
