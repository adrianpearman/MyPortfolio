// Modules
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/config/.env") });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const ngrok = require("ngrok");
const sslRedirect = require("heroku-ssl-redirect");
// Environment Variables
const app = express();
const PORT = process.env.PORT || 3001;
const keys = require("./config/keys");
// Database
require("./models/Contact");
require("./models/Experience");
require("./models/Projects");
// Express Middleware
app.use(sslRedirect());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);
// dB Connection
mongoose.Promise = global.Promise;
// Environment Variables
if (process.env.NODE_ENV === "production") {
  mongoose.connect(keys.mongoDBURI_PROD, { useNewUrlParser: true });
  console.log("Connected to Production Database");
  app.use(express.static(path.join(__dirname, "../client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
} else {
  mongoose.connect(keys.mongoDBURI_DEV, { useNewUrlParser: true });
  console.log("Connected to Development Database");
  //ngrok
  // (async function() {
  //   const url = await ngrok.connect(PORT);
  //   console.log(url);
  // })();
}
// Server Startup
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.clear();
  }
  console.log(`Server running on PORT: ${PORT}`);
  console.log(process.env.NODE_ENV);
});
