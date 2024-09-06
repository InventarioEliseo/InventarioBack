require("dotenv").config();

const { Compra } = require("../models/index");

class CompraController {
  async searchByQuery(fields) {
    try {
      return await Compra.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Compra.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Compra.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Compra.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new CompraController();
