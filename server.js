const express = require("express");
const app = express();
// const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const connectDB = require("./connection/db");

require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + "/public/index.html"));
app.use(express.json());
// app.use(helmet());
app.use(cors());

app.use("/api/auth", require("./routes/product"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static(__dirname + "/public/index.html"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
