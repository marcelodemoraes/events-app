const mongoose = require("mongoose");

//Schema of an event
const eventSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    min: 1
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Event", eventSchema);
