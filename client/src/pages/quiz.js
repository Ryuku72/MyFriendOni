import React, {useState, useEffect } from 'react';
import API from "../utils/API";
import Wrapper from '../component/Wrapper'
import { useAuth } from "../utils/auth";
import Card from '../component/Card';
import Navbar from '../component/Navbar';

function Quiz(props){

// States
  const [words, setWords] = useState({
    Question: [], 
    Answer: [], 
    position: 0
    })

  const [user, setUser] = useState({})

  const [points, setPoints] = useState({
    score: 0,
  })

  const [timeLeft, setTimeLeft] = useState(null)

// useEffects

  useEffect(() => {
    loadVocabList()
    getUser()
    }, [points.score])

  useEffect(()=> {
      if (timeLeft <= 0){
          setTimeLeft(0)
      }
      if (!timeLeft) return;
      const intervalId = setInterval(()=> {
          setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearInterval(intervalId)
  }, [timeLeft])


// Database Calls

function getUser() {
  const user = localStorage.getItem("tokens")
  setUser(JSON.parse(user))
  //console.log(JSON.parse(user))
}

function loadVocabList() {
  API.getJapanese()
    .then(res => {
      //console.log(res)

// Sort Functions
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

const shuffleAnswer = shuffle(res.data.answer).map(results => {
  return (
    results.English
  )
}) 
      setWords({ ...words, Answer: shuffleAnswer, Question: res.data.question})
    })
    .catch(err => console.log(err));
};

// Auth

const { setAuthTokens } = useAuth();

function logOut() {
  setAuthTokens();
}

// Handlers

function handleUserInput(event) {
  event.preventDefault()
  const buttonInput = event.target.innerText.toLowerCase()
  const answer = words.Question.English
  if (buttonInput === answer ){
    //console.log("correct")
    const addPoints = points.score + 1;
    setPoints({...points, score: addPoints })
  } else {
    //console.log("wrong")
    //console.log("correct")
    const minusPoints = points.score - 1;
    setPoints({...points, score: minusPoints })
  }
  loadVocabList()
}

function startQuiz(event){
  event.preventDefault()
  setTimeLeft(60)
}

    return (
        <div className="w-screen" style={{height:"92vh"}}>
             <Navbar 
             logout={logOut}
             user={user.username}
             highscore={user.highScore}
             totalscore={user.totalScore}
             score={points.score}
             time={timeLeft}
             startQuiz={startQuiz}
             />
            <Wrapper>
             <Card
              question={words.Question.Japanese}
              userInput={handleUserInput}
              answer1={words.Answer[0]}
              answer2={words.Answer[1]}
              answer3={words.Answer[2]}
              answer4={words.Answer[3]}
              />
            </Wrapper>
        </div>
      );
}

export default Quiz;