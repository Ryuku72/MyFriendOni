const router = require("express").Router()
const { letters } = require('../../model');

router.get("/", function (req, res){
    letters.find({})
    .then(result=> {
      res.json(result)
    }) .catch((err) => res.status(404).json(err));
  })

module.exports = router;