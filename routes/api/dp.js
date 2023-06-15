const express = require("express");
const router = express.Router();

// @route   GET api/dp
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("DP Question"));

module.exports = router;
