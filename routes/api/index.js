const router = require("express").Router();
const Authenticator = require("../../config/middleware/Authenticator")

//Doesn't need authentication
router.use("/vocab", require("./vocabulary"))
router.use("/japanese", require("./japanese"))
router.use("/furigana", require("./furigana"))
router.use("/letters", require("./letters"))

//Needs Authentication
router.use(require('./auth/auth'));
router.use(Authenticator)
router.use("/users", require("./user"))

module.exports = router;