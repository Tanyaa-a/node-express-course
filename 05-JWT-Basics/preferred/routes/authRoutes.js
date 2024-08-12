const express = require("express");
const router = express.Router();
const { logon, hello } = require("../controllers/authController");
const authenticationMiddleware = require("../middleware/authMiddleware");

router.route("/hello").get(authenticationMiddleware, hello);
router.route("/logon").post(logon);

module.exports = router;
