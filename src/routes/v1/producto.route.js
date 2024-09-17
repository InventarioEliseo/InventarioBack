const express = require("express");
const router = express.Router();
const Producto = require("../../controllers/producto.controller");
const http = require("../../utils/httpresponse");

router.get("/", async (req, res, next) => {
  try {
    const payload = await Producto.searchByQuery(req.query);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.post("/reporte", async (req, res, next) => {
  try {
    const payload = await Producto.generateReport(req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = await Producto.create(req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await Producto.update(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = await Producto.delete(id, req.body);
    const status = await http.status(payload);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
