import mongoose from "mongoose";

const { Schema, model } = mongoose;

const clientesSchema = new Schema({
  name: {
    type: String,
  },
  numeroDocumento: {
    type: String,
  },
  direction: {
    type: String,
  },
  telephone: {
    type: String,
  },
});

export const clientesModel = model("clientes", clientesSchema);
