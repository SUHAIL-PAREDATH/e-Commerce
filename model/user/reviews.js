const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "products",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  helpful: {
    type: Number,
    default: 0,
  },
});

const ReviewCollection = mongoose.model("Review", reviewSchema);
module.exports = ReviewCollection;