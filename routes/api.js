const router = require("express").Router();
const { vocablists, letters, users } = require('../model');

router.post("/api/login", function (req, res){
  users.find({ username: req.body.username })
  .then(result => {
    //console.log(result)

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
      let response = term[Math.floor(Math.random() * term.length)];
      let question = response.toObject()
      question.Correct = "true";
      let newWordArray = term.filter(element => element.Row !== question.Row)
      let answerArray = []
    for (let i = 0; i < 3; i++){
      let filter = newWordArray[Math.floor(Math.random() * newWordArray.length)]
      let answer = filter.toObject()
      answer.Correct = "false";
      answerArray.push(answer)
    }
     answerArray.push(question)

     function shuffle(arra1) {
      let ctr = arra1.length;
      let temp;
      let index;

      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
  }
      let shuffleArray = shuffle(answerArray);
      res.json({question: question, answer: shuffleArray })  
      })
    .catch(err => res.status(404).json(err))
}) 


router.post("/api/vocab", function (req, res) {
  //console.log(req.body);
  const words = new vocablists(req.body) 
  words.save(function (err) {
    res.json(words)
  });
})

module.exports = router;