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

  async generateReport(fields) {
    try {
      const startOfMonth = new Date(`${fields.year1}-${fields.month1}-01T00:00:00Z`);
      const endOfMonth = new Date(`${fields.year2}-${fields.month2}-01T00:00:00Z`);
      console.log(startOfMonth);
      console.log(endOfMonth);
      console.log(startOfMonth<endOfMonth);
      return await Venta.find({
        createdAt: { $gte: startOfMonth, $lt: endOfMonth }
      });
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
