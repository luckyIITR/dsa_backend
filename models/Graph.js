const mongoose = require("mongoose");

const GraphSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
  },
});

module.exports = Graph = mongoose.model("graph", GraphSchema);
