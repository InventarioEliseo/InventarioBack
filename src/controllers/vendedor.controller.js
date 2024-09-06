require("dotenv").config();

const { Vendedor } = require("../models/index");

class VendedorController {
  async searchByQuery(fields) {
    try {
      return await Vendedor.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Vendedor.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Vendedor.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Vendedor.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new VendedorController();
