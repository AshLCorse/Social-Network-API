const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    thoughtName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: "Unnamed thought",
    },
    likes: {
      type: Number,
      required: true,
      default: 0,
    },
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
