const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const messageSchema = new mongoose.Schema({
  senderId: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
});

const ConversationSchema = new mongoose.Schema({
  members: { type: [String], required: true },
  messages: [messageSchema],
});

module.exports = mongoose.model("Conversation", ConversationSchema);
