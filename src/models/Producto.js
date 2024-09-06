const { Schema, model } = require("mongoose");

const productoSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  precio: { type: Number, require: true },
  tamaño: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  calidad: { type: Number, require: true },
  descripcion: { type: String, require: true },
  picture: { type: String, default: "" },
}, { timestamps: true }
);

const Producto = model("Producto", productoSchema, "Productos");
module.exports = Producto;
