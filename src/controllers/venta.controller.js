require("dotenv").config();

const { Venta } = require("../models/index");

class VentaController {
  async searchByQuery(fields) {
    try {
      return await Venta.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Venta.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Venta.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Venta.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new VentaController();
