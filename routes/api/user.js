const router = require("express").Router();
const { users } = require('../../model');

//find user
router.get("/:id", function (req, res){
  users.findOne({ _id: req.params.id })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

//create user
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

//update points
router.put("/update/:id", function (req, res){
  console.log(req.body)
  users.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

//update login details
router.post("/:id", function (req, res){
  console.log("Backend", req.body.username)
  console.log("Backend", req.body.password)

  request = { "username": req.body.username, "password": req.body.password}

  users.findOneAndUpdate({ _id: req.params.id }, request) 
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

//delete user
router.delete("/:id", function (req, res){
  users.findById({ _id: req.params.id })
  .then(dbModel => {
    console.log(req.params.id + " Deleted")
    dbModel.remove();
  })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

module.exports = router;