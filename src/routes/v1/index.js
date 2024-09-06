const express = require("express");

const router = express.Router();

const user = require("./user.route");
const pharmacy = require("./pharmacy.route");
const producto = require("./producto.route");
const purchase = require("./purchase.route");
const order = require("./order.route");
const proveedor = require("./proveedor.route");
const negocio = require("./negocio.route");
const vendedor = require("./vendedor.route");
const ticket = require("./ticket.route");
const cliente = require("./cliente.route");
const factura = require("./factura.route");
const compra = require("./compra.route");
const venta = require("./venta.route");
const almacen = require("./almacen.route");

const mapNavigationUrls = [
  {
    path: "/user",
    route: user,
  },
  {
    path: "/producto",
    route: producto,
  },
  {
    path: "/proveedor",
    route: proveedor,
  },
  {
    path: "/negocio",
    route: negocio,
  },
  {
    path: "/vendedor",
    route: vendedor,
  },
  {
    path: "/ticket",
    route: ticket,
  },
  {
    path: "/cliente",
    route: cliente,
  },
  {
    path: "/factura",
    route: factura,
  },
  {
    path: "/compra",
    route: compra,
  },
  {
    path: "/venta",
    route: venta,
  },
  {
    path: "/almacen",
    route: almacen,
  },
];

mapNavigationUrls.forEach((item) => {
  router.use(item.path, item.route);
});

module.exports = router;
