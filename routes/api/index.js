const router = require("express").Router();

router.use("/japanese", require("./japanese"))
router.use("/english", require("./english"))
router.use("/users", require("./user"))
router.use("/vocab", require("./vocabulary"))
router.use("/login", require("./login"))

module.exports = router;