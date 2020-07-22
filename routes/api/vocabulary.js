const router = require("express").Router();
const { vocablists } = require('../../model');

router.post("/vocab", function (req, res) {
    //console.log(req.body);
    const words = new vocablists(req.body) 
    words.save(function (err) {
      res.json(words)
    });
  })

  module.exports = router;