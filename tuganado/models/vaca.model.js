const { Schema, model } = require("mongoose");

const cowSchema = new Schema({
  number: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  weight: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  worth: {
    type: String,
    required: true,
  },
});

const Vaca = model("Vaca", vacaSchema);

module.exports = Vaca;