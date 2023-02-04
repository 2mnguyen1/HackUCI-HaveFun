const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth");

mongoose.connect(process.env.DB_URL , { useNewUrlParser: true }, () => {
  console.log("Conntected to MongoDB");
});

app.use(express.json());


app.use("/api/auth", authRoute);

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.listen(3001, () => {
    console.log("3001 PORT");
  });