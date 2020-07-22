const path = require("path");
const express = require("express")
const router = express.Router();

router.use("/api", require("./api"));

// Get Route
router.get(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;