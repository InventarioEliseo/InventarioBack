require("dotenv").config();

const { Proveedor } = require("../models/index");

class ProveedorController {
  async searchByQuery(fields) {
    try {
      return await Proveedor.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Proveedor.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Proveedor.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Proveedor.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ProveedorController();
