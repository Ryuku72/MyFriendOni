const router = require("express").Router();
const { vocablists } = require('../model');

router.get("/vocab", (req, res) => {
    vocablists.find({})
    .then(data => {
        console.log(data)
        res.json(data);
      })
    .catch(err => res.status(404).json(err))
});

router.post("/vocab", function (req, res) {
  console.log(req.body);
  const words = new vocablists(req.body) 
  words.save(function (err) {
    res.json(words)
  });
})

module.exports = router;