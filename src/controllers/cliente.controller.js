require("dotenv").config();

const { Cliente } = require("../models/index");

class ClienteController {
  async searchByQuery(fields) {
    try {
      return await Cliente.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Cliente.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Cliente.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Cliente.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ClienteController();
