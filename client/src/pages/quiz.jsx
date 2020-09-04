import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'

//Redux
import { fetchUser, increment, decrement, engPoints, jpnPoints, kataPoints, hiraPoints, updatePoints, sessionUpdate, sessionNoUpdate } 
from '../redux/actions/user';
import { jpnQuiz, engQuiz, hiraQuiz, kataQuiz, loadWords, loadLetters, exitQuiz, addHighScore, scorePage, zeroPoints
} from '../redux/actions/quiz';
import { startQuiz, clearOverlay, disableActiveBtn } from '../redux/actions/ui';

//components
import Footer from "../components/Footer";
import ScoreCard from "../components/ScoreCard";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import QuizBackground from "../components/QuizBackground";

function Quiz(props) {
  // Redux + React-Router
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()

  // States 
  const [timeLeft, setTimeLeft] = useState("end");

  // Date functions
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  // QUIZ URLS
  function startJpnQuiz(event) {
    event.preventDefault();
    history.push("/quiz/japanese")
  }

  function startEngQuiz(event) {
    event.preventDefault();
    history.push("/quiz/english")
  }

  function startKataQuiz(event) {
    event.preventDefault();
    history.push("/quiz/katakana")
  }

  function startHiraQuiz(event) {
    event.preventDefault();
    history.push("/quiz/hiragana")
  }

  // useEffects
  useEffect(() => {
    dispatch(fetchUser())
  // eslint-disable-next-line
  }, [])

  useEffect(() => {
    async function settings(){
      dispatch(startQuiz())
      setTimeLeft(125);
      setTimeout(() => {
        dispatch(clearOverlay())
      },3500)
    }

    if (location.pathname === "/quiz/japanese") {
    dispatch(jpnQuiz())
    settings()
    } 
    else if (location.pathname === "/quiz/english"){
      dispatch(engQuiz())
      settings()
    }
    else if (location.pathname === "/quiz/hiragana"){
      dispatch(hiraQuiz())
      settings()
    } 
    else if (location.pathname === "/quiz/katakana") {
    dispatch(kataQuiz())
    settings()
    } 
    else {
      //console.log("Quiz Page")
      //dispatch(quizPage())
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onHandleExitQuiz();
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [timeLeft]);

  useEffect(() => {
    loadVocabList();
    // eslint-disable-next-line
  }, [props.quiz.language]);

  function loadVocabList() {
    if (props.quiz.language === "Hiragana" || props.quiz.language === "Katakana") {
      dispatch(disableActiveBtn())
      setTimeout(() => {
      dispatch(loadLetters())
    }, 800);
    } else {
      dispatch(disableActiveBtn())
      setTimeout(() => {
      dispatch(loadWords())
    }, 800);
    }
  }

  function exitToQuizPage(){
    setTimeLeft("end");
    dispatch(exitQuiz())
  }

  // Handlers
  function handleUserInput(event) {
    event.preventDefault();
    let buttonInput = event.target.value;
    const addPoints = props.quiz.points + 5;
    let answer = 
      props.quiz.language === "Hiragana" || props.quiz.language === "Katakana"
        ? props.quiz.Question.Romaji
        : props.quiz.Question.English;
     
    if (buttonInput === "true") {
      if (addPoints > props.quiz.highScore) {
        dispatch(addHighScore(addPoints))
        dispatch(increment(answer))
      } else {
        dispatch(increment(answer))
      }
    } else if (buttonInput === "false" && timeLeft <= 10 && props.quiz.points >= 3) {
      dispatch(decrement(answer))
      setTimeLeft("end");
      dispatch(scorePage())
    } else if (buttonInput === "false" && timeLeft <= 10 && props.quiz.points <= 3) {
      dispatch(zeroPoints(answer))
      setTimeLeft("end");
      dispatch(scorePage())
    } else if (buttonInput === "false" && timeLeft >= 10 && props.quiz.points  <= 3) {
      dispatch(zeroPoints(answer))
      setTimeLeft(timeLeft - 10);
    } else {
      dispatch(decrement(answer))
      setTimeLeft(timeLeft - 10);
    }
     loadVocabList();
  }

   function onHandleExitScore() {

    let request = {
      "engHighScore": props.user.engHighScore,
      "hiraHighScore": props.user.hiraHighScore,
      "jpnHighScore": props.user.jpnHighScore,
      "kataHighScore": props.user.kataHighScore,
      "totalScore": props.user.totalScore,
      "lastHighScore": props.user.lastHighScore
    }

   // console.log(request)

   dispatch(updatePoints(request))
   dispatch(fetchUser())
   }

   function onHandleExitQuiz() {
    let scoreLanguage = "";
    switch (props.quiz.language) {
      case "English":
        scoreLanguage = "engHighScore";
        break;
      case "Hiragana":
        scoreLanguage = "hiraHighScore";
        break;
      case "Katakana":
        scoreLanguage = "kataHighScore";
        break;
      default:
        scoreLanguage = "jpnHighScore";
        break;
    }
    let sessions = {
      "language" : props.quiz.language,
      "correct" :  props.quiz.CorrectArray, 
      "incorrect" : props.quiz.WrongArray,
      "score": props.quiz.points, 
     }

     function preSets(){
      setTimeLeft("end");
      if ((props.quiz.CorrectArray.length === 0) && (props.quiz.WrongArray.length === 0)){
        dispatch(sessionNoUpdate())
        console.log("no information recorded")
      } else {
       // console.log(sessions)
      dispatch(sessionUpdate(sessions))
      }
    }

    //console.log(props.user[scoreLanguage]); 

    if ((props.quiz.highScore > props.user[scoreLanguage]) || (props.user[scoreLanguage] === null)) {
     // console.log(scoreLanguage); 
     // console.log(props.user.hiraHighScore)

      switch(props.quiz.language){
        case "English":
       dispatch(engPoints(props.quiz.highScore))
       //console.log("Eng HS")
       break;
      case "Hiragana":
        dispatch(hiraPoints(props.quiz.highScore))
        //console.log("Hira HS");
        break;
      case "Katakana":
        dispatch(kataPoints(props.quiz.highScore))
        //console.log("Kata HS");
        break;
      default:
        dispatch(jpnPoints(props.quiz.highScore))
        //console.log("JPN HS")
        break;
      }
      
      preSets()
      setTimeout(() => {
        dispatch(scorePage())
      }, 350);
    } else {
      preSets()
      setTimeout(() => {
        dispatch(scorePage())
      }, 350);
    }
  }

  return (
    <div>
      <Navbar
        highscore={props.quiz.highScore}
        totalscore={props.user.totalScore}
        score={props.quiz.points}
        startJpnQuiz={startJpnQuiz}
        startEngQuiz={startEngQuiz}
        startKataQuiz={startKataQuiz}
        startHiraQuiz={startHiraQuiz}
        exitToQuizPage={exitToQuizPage}
      />
      <div
        className="border-b-2 border-t-2 border-pink-300 flex justify-center items-center relative w-full"
        style={{height: "82vh"}}
      >
        <QuizBackground 
        user={props.user.username} 
        highScore={props.quiz.highScore}
        bgToggle={{display: props.ui.quizPage || props.ui.scorePage ? "none" : "flex"}}
        exp={props.ui.quizExp}
        />
        <Card
          btnColor={props.ui.btnColor}
          style={{ display: props.ui.quizPage ? "inline-flex" : "none" }}
          question={props.quiz.Question}
          userInput={handleUserInput}
          answer={props.quiz.Answers}
          disable={props.ui.activeBtn}
          exitQuiz={onHandleExitQuiz}
          language={props.quiz.language}
          gifState={props.ui.gifState}
          overlay={props.ui.overlay}
          engHighScore={props.user.engHighScore}
          jpnHighScore={props.user.jpnHighScore}
          kataHighScore={props.user.kataHighScore}
          hiraHighScore={props.user.hiraHighScore}
          score={props.quiz.points}
        />
        <ScoreCard
          score={props.quiz.points}
          wrong={props.quiz.WrongArray}
          correct={props.quiz.CorrectArray}
          highScore={props.quiz.highScore}
          style={{ display: props.ui.scorePage ? "flex" : "none" }}
          date={today}
          click={onHandleExitScore}
        />
      </div>
      <Footer user={props.user.username}>
        <p
          className="footer px-2 text-2xl inline-flex font-mono capitalize text-red-500"
          style={{ opacity: props.ui.quizPage ? "1" : "0" }}
        >
          <span className="footer text-2xl score-sheet text-gray-800 mr-2">Time: </span>{" "}
          {timeLeft}
        </p>
      </Footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  quiz: state.quiz,
  ui: state.ui
})

export default connect(mapStateToProps )(Quiz);
