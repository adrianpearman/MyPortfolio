// Modules
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/config/.env") });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ngrok = require("ngrok");
const sslRedirect = require("heroku-ssl-redirect");
// Environment Variables
const app = express();
const PORT = process.env.PORT || 3001;
const keys = require("./config/keys");
// Database
require("./models/Contact");
require("./models/Experience");
require("./models/Projects");
// dB Connection
mongoose.Promise = global.Promise;
mongoose.connect(keys.mLabURI, { useNewUrlParser: true });
// Express Middleware
app.use(sslRedirect());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
} else {
  //ngrok
  // (async function() {
  //   const url = await ngrok.connect(PORT);
  //   console.log(url);
  // })();
}

// Server Startup
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
