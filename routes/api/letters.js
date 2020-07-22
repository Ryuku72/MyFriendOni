const { letters } = require("../../model");
const router = require("express").Router();

router.get("/", (req, res) => {
  letters
    .find({})
    .then((term) => {
      //console.log(term)
      let response = term[Math.floor(Math.random() * term.length)];
      let question = response.toObject();
      question.Correct = "true";
      let newLetterArray = term.filter((element) => element._id !== question._id);
      let answerArray = [];
      //console.log(newLetterArray);
      for (let i = 0; i < 3; i++) {
        let filter =
          newLetterArray[Math.floor(Math.random() * newLetterArray.length)];
        let answer = filter.toObject();
        answer.Correct = "false";
        answerArray.push(answer);
      }
      answerArray.push(question);

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
     // console.log(question)
      //console.log("-------")
     // console.log(shuffleArray)
      res.json({ question: question, answer: shuffleArray });
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
