const router = require("express").Router();
const { users } = require('../../model');


router.get("/:id", function (req, res){
  users.findOne({ _id: req.params.id })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

router.post("/", function (req, res){
    console.log(req.body)
    users.findOne(req.body)
    .then(result => {
      if (result) {
        res.status(401).send({
          message:"User Already Exists"})
      } else {
        users.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
    }) 
})

router.put("/update/:id", function (req, res){
  //console.log(req.body)
  users.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

module.exports = router;