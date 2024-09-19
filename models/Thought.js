const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

//Schema to create Thought model
const thoughtSchema = new Schema(
  {
    username: {
      type: String,
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
