require("dotenv").config();

const { Almacen } = require("../models/index");

class AlmacenController {
  async searchByQuery(fields) {
    try {
      return await Almacen.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Almacen.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Almacen.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Almacen.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new AlmacenController();
