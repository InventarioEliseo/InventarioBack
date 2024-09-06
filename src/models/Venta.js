const { Schema, model } = require("mongoose");

const ventaSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  cantidad: { type: Number, require: true },
  precio: { type: Number, require: true },
}, { timestamps: true }
);

const Venta = model("Venta", ventaSchema, "Ventas");
module.exports = Venta;
