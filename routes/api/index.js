const router = require("express").Router();
const Authenticator = require("../../config/middleware/Authenticator")

router.use(require('./auth/auth'));
router.use(Authenticator)
router.use("/users", require("./user"))
router.use("/login", require("./login"))
router.use("/vocab", require("./vocabulary"))
router.use("/japanese", require("./japanese"))
router.use("/furigana", require("./furigana"))
router.use("/letters", require("./letters"))

module.exports = router;