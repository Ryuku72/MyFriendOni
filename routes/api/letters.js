const { letters } = require("../../model");
const router = require("express").Router();

router.get("/", (req, res) => {
  letters
    .find({})
    .then((term) => {
      ////¬console.log(term)
      let answerArray = [];
      let response = term[Math.floor(Math.random() * term.length)];
      let question = response.toObject();
      question.Correct = "true";
      ////¬console.log("Term Length: ", term.length)
      answerArray.push(question);
      ////¬console.log("Question", question);
      
      let newLetterArray = term.filter((element) => element.Hiragana != question.Hiragana);
      //¬console.log("NewArray1 length: " + newLetterArray.length)
      let responseOne = newLetterArray[Math.floor(Math.random() * newLetterArray.length)];
      let answerOne = responseOne.toObject();
      answerOne.Correct = "false"
      answerArray.push(answerOne);
      //¬console.log("Answer1: ", answerOne);

      let newLetterArray2 = newLetterArray.filter((element) => element.Hiragana != answerOne.Hiragana);
      let responseTwo = newLetterArray2[Math.floor(Math.random() * newLetterArray2.length)];
      let answerTwo = responseTwo.toObject()
      //¬console.log("NewArray2 length: " + newLetterArray2.length);
      answerTwo.Correct = "false"
      answerArray.push(answerTwo);
      //¬console.log("Answer2: ", answerTwo);

      let newLetterArray3 = newLetterArray2.filter((element) => element.Hiragana != answerTwo.Hiragana);
      let responseThree = newLetterArray3[Math.floor(Math.random() * newLetterArray3.length)];
      let answerThree = responseThree.toObject();
      //¬console.log("NewArray3 length: " + newLetterArray3.length)
      answerThree.Correct = "false"
      answerArray.push(answerThree);
      //¬console.log("Answer3: ", answerThree);

      ////¬console.log(answerArray)

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
  
      // //¬console.log(shuffleArray)
      res.json({ question: question, answer: shuffleArray });
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
