const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExperienceSchema = new Schema({
  title: { type: String },
  employer: { type: String },
  dates: { type: String },
  location: { type: String },
  responsibilities: [{ type: String }]
});

mongoose.model("experience", ExperienceSchema);
