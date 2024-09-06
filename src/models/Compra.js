const { Schema, model } = require("mongoose");

const compraSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  cantidad: { type: Number, require: true },
  precio: { type: Number, require: true },
}, { timestamps: true }
);

const Compra = model("Compra", compraSchema, "Compras");
module.exports = Compra;
