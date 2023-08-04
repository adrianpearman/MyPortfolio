const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExperienceSchema = new Schema({
  title: String,
  employer: String,
  dates: String,
  location: String,
  responsibilities: [{ type: String }]
});

mongoose.model("experience", ExperienceSchema);
