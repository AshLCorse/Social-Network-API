const { Friend, User } = require("../models");

module.exports = {
  // Get all friend
  async getFriends(req, res) {
    try {
      const friends = await Friend.find().populate("user");
      res.json(friends);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a friend
  async getSingleFriend(req, res) {
    try {
      const friend = await Friend.findOne({
        _id: req.params.friendId,
      }).populate("users");

      if (!friend) {
        return res.status(404).json({ message: "No friend with that ID" });
      }

      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a friend
  async createFriend(req, res) {
    try {
      const friend = await Friend.create(req.body);
      res.json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a friend
  async deleteFriend(req, res) {
    try {
      const friend = await Friend.findOneAndDelete({
        _id: req.params.friendId,
      });

      if (!friend) {
        res.status(404).json({ message: "No friend with that ID" });
      }

      await User.deleteMany({ _id: { $in: friend.user } });
      res.json({ message: "Friend and user deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a friend
  async updateFriend(req, res) {
    try {
      const friend = await Friend.findOneAndUpdate(
        { _id: req.params.friendId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!friend) {
        res.status(404).json({ message: "No friend with this id!" });
      }

      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
