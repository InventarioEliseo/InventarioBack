require("dotenv").config();

const { Ticket } = require("../models/index");

class TicketController {
  async searchByQuery(fields) {
    try {
      return await Ticket.find(fields);
    } catch (error) {
      return error;
    }
  }

  async create(fields) {
    try {
      return await Ticket.create(fields);
    } catch (error) {
      return error;
    }
  }

  async update(id, fields) {
    try {
      return await Ticket.updateOne({ _id: id }, { $set: fields });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await Ticket.deleteOne({ _id: id });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new TicketController();
