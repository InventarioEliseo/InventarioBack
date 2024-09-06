const { Schema, model } = require("mongoose");

const clienteSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
}, { timestamps: true }
);

const Cliente = model("Cliente", clienteSchema, "Clientes");
module.exports = Cliente;
