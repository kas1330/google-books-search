const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

//data parser, takes user data and converts it to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api");
app.use(apiRoutes);
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks");

app.listen(PORT, function () {
  console.log("App is listening on: ", PORT);
});
