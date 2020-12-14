const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectsSchema = new Schema({
  title: { type: String },
  overview: { type: String },
  liveLink: { type: String },
  repoLink: { type: String },
  image: { type: String },
  stack: [String],
});

mongoose.model("project", ProjectsSchema);
