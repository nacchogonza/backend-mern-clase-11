import express from 'express';
import { routerApi, productos } from './RouterApi.js';

const app = express();

app.set("views", "./views")
app.set("view engine", "pug");

app.use('/api', routerApi);

app.get('/productos/vista', (req, res) => {
  const data = productos.getProductos();
  res.render("listProducts.pug", {
    products: data
  });
})

app.get('/productos/agregar', (req, res) => {
  res.render("addProduct.pug");
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static('public'))

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`servidor inicializado en ${server.address().port}`)
})

server.on("error", error => console.log(`error en el servidor: ${error.message}`))