const router = require("express").Router();
const { vocablists, letters, users } = require('../model');

router.post("/api/login", function (req, res){
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

router.post("/api/user", function (req, res){
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

router.get("/api/japanese", (req, res) => {

    vocablists.find({}).then(term=> {
      const question = term[Math.floor(Math.random() * term.length)]
      let newWordArray = term.filter(element => element.Row !== question.Row)
      let answerArray = []
    for (let i = 0; i < 3; i++){
      const answer = newWordArray[Math.floor(Math.random() * newWordArray.length)]
      console.log(answer)
      newWordArray.splice(JSON.parse(answer.Row, 1))
      console.log(newWordArray)
      answerArray.push(answer)
    }
     answerArray.push(question)
      res.json({question: question, answer: answerArray })  
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