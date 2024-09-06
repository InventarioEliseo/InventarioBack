const { Schema, model } = require("mongoose");

const almacenSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  tamaño: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  cantidad: { type: Number, require: true },
}, { timestamps: true }
);

const Almacen = model("Almacen", almacenSchema, "Almacenes");
module.exports = Almacen;
