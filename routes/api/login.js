const router = require("express").Router();
const { users } = require('../../model');

router.post("/", function (req, res){
  console.log(req.body)
    users.find({ username: req.body.username })
    .then(result => {
      console.log(result)
          if (result[0].password == req.body.password) {
            res.status(200).json(result[0])
          } else {
            res.status(401).send({
              message:"Incorrect Password"})
          }
        }).catch(err => 
            res.status(401).send({
              message:"Incorrect Username"}
              )
          )
    })

module.exports = router