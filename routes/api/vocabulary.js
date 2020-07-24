const router = require("express").Router();
const { vocablists } = require('../../model');

router.get("/", function (req, res){
  vocablists.find({})
  .then(result=> {
    res.json(result)
  }) .catch((err) => res.status(404).json(err));
})


router.post("/", function (req, res) {
    //console.log(req.body);
    const words = new vocablists(req.body) 
    words.save(function (err) {
      res.json(words)
    });
  })

  module.exports = router;