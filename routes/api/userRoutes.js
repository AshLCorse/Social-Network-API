const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route("/:userId/thoughts").post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route("/:userId/thoughts/:thoughtId").delete(removeThought);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friend/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
