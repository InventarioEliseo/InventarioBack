require("dotenv").config();

const { Negocio } = require("../models/index");

class NegocioController {
  async searchByQuery(fields) {
    try {
      return await Negocio.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Negocio.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Negocio.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Negocio.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new NegocioController();
