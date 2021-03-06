const express = require("express");
require("express-async-errors");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const customersRoute = require("./routes/customerRoute");
const productsRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const shippingMethodRoute = require("./routes/shippingMethodRoute");
const imageRoute = require("./routes/imageRoute");

//Cookie
app.use(
  cookieSession({
    secret: process.env.SECRET || "secretkey",
    maxAge: 1000 * 60 * 60,
    httpOnly: false,
  })
);

app.use("/uploads", express.static("./uploads"));

//CORS handling
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header({
    "Access-Control-Allow-Origin": req.headers.origin,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
  });
  next();
});

//Routes
app.use("/customer", customersRoute);
app.use("/product", productsRoute);
app.use("/order", orderRoute);
app.use("/shippingMethod", shippingMethodRoute);
app.use("/upload", imageRoute);

//Connecting to database
const options = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(
  "mongodb+srv://JanneKemi:12345@jannestapeter-8qfg8.mongodb.net/jannestapeter?retryWrites=true&w=majority",
  options,
  () => {
    console.log("Connected to database");
  }
);

//404 -Error handler
app.use(function (req, res) {
  res.status(404).json({ message: "Resource could not be found" });
});

//Global Error handler
app.use(function (err, req, res, next) {
  console.error(err);
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).json({ message: err.message });
});

app.listen(5000, () => console.log("Server is up and running om port 5000"));

module.exports = app;
