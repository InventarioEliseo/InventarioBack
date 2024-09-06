const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  total: { type: Number, require: true },
  telefono: { type: Number, require: true },
}, { timestamps: true }
);

const Ticket = model("Ticket", ticketSchema, "Tickets");
module.exports = Ticket;
