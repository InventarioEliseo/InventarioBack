const { Schema, model } = require("mongoose");

const negocioSchema = new Schema({
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
  establecimiento: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: "email is required",
    match: [/^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/, "email not valid"],
  },
}, { timestamps: true }
);

const Negocio = model("Negocio", negocioSchema, "Negocios");
module.exports = Negocio;
