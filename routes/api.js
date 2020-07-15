const express = require("express")
const router = express.Router();
const { Vocablist } = require('../model');

router.get("/api/vocab", (req, res) => {
    Vocablist.find({})
    .then(data => {
        console.log()
        res.json(data);
      })
    .catch(err => res.status(404).json(err))
});

router.post("/api/vocab", function (req, res) {
  console.log(req.body);
  const words = new Vocablist(req.body) 
  words.save(function (err) {
    res.json(words)
  });
})

module.exports = router;