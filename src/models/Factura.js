const { Schema, model } = require("mongoose");

const facturaSchema = new Schema({
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
  direccion: {
    type: String,
    required: true,
  },
}, { timestamps: true }
);

const Factura = model("Factura", facturaSchema, "Facturas");
module.exports = Factura;
