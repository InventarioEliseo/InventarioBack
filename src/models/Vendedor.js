const { Schema, model } = require("mongoose");

const vendedorSchema = new Schema({
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
  telefono: { type: Number, require: true },
}, { timestamps: true }
);

const Vendedor = model("Vendedor", vendedorSchema, "Vendedores");
module.exports = Vendedor;
