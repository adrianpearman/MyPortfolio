const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: { type: String },
  company: { type: String },
  email: { type: String },
  description: { type: String },
  dateSent: { type: Number }
});

mongoose.model("contact", ContactSchema);
