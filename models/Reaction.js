const { Schema, Types } = require("mongoose");

const reactionsSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = reactionsSchema;

// This schema is for storing reactions to a post. Each reaction is associated with a user and a post, and has a unique ID. The reactionBody is a string that represents the content of the reaction, and the createdAt field is automatically set to the current date when a new reaction is created.
