import React, {useState, useEffect } from 'react';
import API from "../utils/API";
import Wrapper from '../component/Wrapper'
import { useAuth } from "../utils/auth";
import Card from '../component/Card';

function Quiz(props){
  
  const initialState = {
  Japanese: [], English: [], Question: [], Answer: [], currentArray: [], Score: 0, Position: 0
  }

  const [words, setWordList] = useState(initialState)

  useEffect(() => {
    loadVocabList()
    }, [])

    const { setAuthTokens } = useAuth();
  
    function logOut() {
      setAuthTokens();
    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
  
    //console.log(projects)
  
    // Loads all books and sets them to books
    function loadVocabList() {
    API.getDb()
      .then(res => {
        //console.log(res.data.words)
        const List = res.data.words
        const japaneseWords = List.map(result => {
          return {
            id: result.Row,
            Japanese: result.Japanese
          }
        })
        const englishWords = List.map(result => {
          return {
            id: result.Row,
            English: result.English
          }
        }) 
        
        const question = List[Math.floor(Math.random() * List.length)]
        //console.log(question)
        let newWordArray = List.filter(element => element.Row !== question.Row)
        //console.log(newWordArray)
        let answerArray = []
        for (let i = 0; i < 3; i++){
          let answer = newWordArray[Math.floor(Math.random() * newWordArray.length)]
          newWordArray.splice(JSON.parse(answer.Row), 1)
          //console.log(newWordArray)
          answerArray.push(answer)
        }
        answerArray.push(question)
        console.log(answerArray)

        setWordList({...words, Japanese: japaneseWords, English: englishWords, Question: question, Answer: answerArray, currentArray: newWordArray})
      })
      .catch(err => console.log(err));
  };

  const shuffleAnswer = shuffle(words.Answer).map(results => {
    return (
      results.English
    )
  })

  console.log(shuffleAnswer[1])

    return (
        <div className="w-screen" style={{height:"92vh"}}>
            <Wrapper>
            <button onClick={logOut}>Log Out</button>
            <p>
              My Friend Oni!
            </p>
             <Card
              question={words.Question.Japanese}
              answer1={shuffleAnswer[0]}
              answer2={shuffleAnswer[1]}
              answer3={shuffleAnswer[2]}
              answer4={shuffleAnswer[3]}
              />
            </Wrapper>
        </div>
      );
}

export default Quiz;