const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  content: String,
  platform: String,
  scheduledAt: Date,
  status: { type: String, default: "Draft" }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
