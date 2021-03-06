const mongoose = require("mongoose");
const product = require("./productModel"),
  ProductSchema = mongoose.model("product").schema;

const OrderModel = mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "customer",
  },
  products: [ProductSchema],
  orderNumber: Number,
  shipped: Boolean,
  shippingMethod: {
    type: mongoose.Types.ObjectId,
    ref: "shippingMethod",
  },
  paymentMethod: "String",
  adress: {
    type: mongoose.Types.ObjectId,
    ref: "adress",
  },
  totalPrice: Number,
  date: String,
});

module.exports = mongoose.model("order", OrderModel);
