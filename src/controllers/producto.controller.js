require("dotenv").config();

const { Producto } = require("../models/index");

class ProductoController {
  async searchByQuery(fields) {
    try {
      return await Producto.find(fields);
    } catch (error) {
      return error;
    }
  }

  async generateReport(fields) {
    try {
      return await Producto.find({
        categoria: fields.categoria
      });;
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Producto.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Producto.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Producto.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ProductoController();
