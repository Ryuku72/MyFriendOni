const router = require("express").Router();
const { users } = require('../../model');


router.post("/", function (req, res){
    //console.log(req.body)
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

module.exports = router;