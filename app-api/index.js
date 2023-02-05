const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const cors = require("cors");
const cookieParser = require("cookie-parser");
mongoose.set("strictQuery", true);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  console.log("Conntected to MongoDB");
});

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3001, () => {
  console.log("3001 PORT");
});
