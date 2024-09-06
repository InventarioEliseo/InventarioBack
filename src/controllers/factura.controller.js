require("dotenv").config();

const { Factura } = require("../models/index");

class FacturaController {
  async searchByQuery(fields) {
    try {
      return await Factura.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Factura.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Factura.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Factura.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new FacturaController();
