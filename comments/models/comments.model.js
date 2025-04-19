const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  snippetId: {
    type: String, 
    required: true,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
