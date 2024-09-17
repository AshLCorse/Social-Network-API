const router = require("express").Router();
const {
  getFriends,
  getSingleFriend,
  createFriend,
  updateFriend,
  deleteFriend,
} = require("../../controllers/friendController.js");

// /api/friends
router.route("/").get(getFriends).post(createFriend);

// /api/friend/:friendId
router
  .route("/:friendId")
  .get(getSingleFriend)
  .put(updateFriend)
  .delete(deleteFriend);

module.exports = router;
