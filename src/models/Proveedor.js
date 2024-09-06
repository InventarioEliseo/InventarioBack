const { Schema, model } = require("mongoose");

const proveedorSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
  telefono: { type: Number, require: true },
}, { timestamps: true }
);

const Proveedor = model("Proveedor", proveedorSchema, "Proveedores");
module.exports = Proveedor;
