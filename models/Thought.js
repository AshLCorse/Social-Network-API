const { Schema, model, Types } = require("mongoose");
const reactionSchema = require("./Reaction");

//Schema to create Thought model
const thoughtSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 99,
      minlength: 4,
      default: "Unnamed thought",
    },
    reactions: [reactionSchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
