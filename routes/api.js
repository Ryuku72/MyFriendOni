const router = require("express").Router();
const { vocablists, letters, users } = require('../model');

router.post("/api/login", function (req, res){
  let userName = users.find({ username: req.body.username })
  if(userName){
    userName.then(result => {
      if (result[0].password == req.body.password) {
        res.status(200).send({
          message: "Successful login!"
        })
      } else {
        res.status(200).send({
          message: "Error, incorrect Password"
      })
      }
    }).catch(err => res.status(404).send({
      message: "Error, incorrect User"
  }))
  }
})


router.get("/api/database", (req, res) => {
    users.find({}).then(profile => {
        
    letters.find({}).then(words => {
        
    vocablists.find({}).then(data => {
        
        res.json({User: profile, Characters: words, List: data});
      })
    .catch(err => res.status(404).json(err))
}) 
.catch(err => res.status(404).json(err));
}) 
.catch(err => res.status(404).json(err))
})

router.post("/api/vocab", function (req, res) {
  console.log(req.body);
  const words = new vocablists(req.body) 
  words.save(function (err) {
    res.json(words)
  });
})

module.exports = router;