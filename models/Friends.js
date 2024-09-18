const { Schema, model } = require("mongoose");

// Schema to create a friend model
const friendSchema = new Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    friendName: {
      type: String,
      required: true,
    },
    onLine: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    friendsList: [
      {
        type: Schema.Types.ObjectId,
        ref: "friend",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Friend = model("friend", friendSchema);

module.exports = Friend;
