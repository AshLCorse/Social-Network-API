const router = require("express").Router();
const friendRoutes = require("./friendRoutes");
const userRoutes = require("./userRoutes");

router.use("/friends", friendRoutes);
router.use("/users", userRoutes);

module.exports = router;
