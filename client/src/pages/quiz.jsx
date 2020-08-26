import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import API from "../utils/API";
import Footer from "../components/Footer";
import ScoreCard from "../components/ScoreCard";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import QuizBackground from "../components/QuizBackground";
import { connect, useDispatch } from 'react-redux'
import { fetchUser } from '../redux/actions/user'
import { increment, engPoints, jpnPoints, kataPoints, hiraPoints, updatePoints } from '../redux/actions/points'

function Quiz(props) {
  // Redux + React-Router
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()

  // States 
  const [points, setPoints] = useState({ score: 0 });
  const [highScore, setHighScore] = useState(0);
  const [words, setWords] = useState({
    Question: [],
    Answer: [],
    btnColor: [],
    WrongAnswers: [],
    CorrectAnswers: [],
  });
  const [gifState, setGifState] = useState("")
  const [timeLeft, setTimeLeft] = useState("end");

  //toggles
  const [quizToggle, setQuizToggle] = useState(false)
  const [scoreToggle, setScoreToggle] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [btnColor, setBtnColor] = useState(false);
  const [language, setLanguage] = useState("English");
  const [overlay, setOverlay] = useState(false);
  const [wrongArray, setWrongArray] = useState([]);
  const [correctArray, setCorrectArray] = useState([]);
  const [exp, setExp] = useState(false)
 

  // Date functions
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  // useEffects
  useEffect(() => {
    props.fetchUser()
  }, [])

  useEffect(() => {
    
    async function settings(inputLanguage){
      setLanguage(inputLanguage)
      setWords({...words,WrongAnswers: [], CorrectAnswers: []})
      setQuizToggle(true);
      setBtnColor(false);
      setScoreToggle(false);
      setPoints({ ...points, score: 0 });
      setHighScore(0);
      setActiveBtn(1);
      setTimeLeft(124);
      setCorrectArray(correctArray)
      setWrongArray(wrongArray)
      setOverlay(true)
      setTimeout(() => {
        setOverlay(false)
      },3500)
    }

    if (location.pathname === "/quiz/japanese") {
    settings("Japanese")
    } 
    else if (location.pathname === "/quiz/english"){
      settings("English")
    }
    else if (location.pathname === "/quiz/hiragana"){
      settings("Hiragana")
    } 
    else if (location.pathname === "/quiz/katakana") {
      settings("Katakana")
    } 
    else {
      console.log("Quiz Page")
      setWords({...words,WrongAnswers: [], CorrectAnswers: []})
    }
  }, [location.pathname]);

  useEffect(() => {
    loadVocabList();
  }, [language]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onHandleExitQuiz();
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  function loadVocabList() {
    if (language === "Hiragana" || language === "Katakana") {
      API.getLetters().then((res) => {
        setActiveBtn(0);
        setTimeout(() => {
          setBtnColor(false)
          setActiveBtn(1);
          setWords({
            ...words,
            Answer: res.data.answer,
            Question: res.data.question,
          });

        }, 800);
      }).catch((err) => console.log(err));
    } else {
      API.getJapanese()
        .then((res) => {
          setActiveBtn(0);
      
          setTimeout(() => {
            setBtnColor(false);
            setActiveBtn(1);
            setWords({
              ...words,
              Answer: res.data.answer,
              Question: res.data.question,
            });
          }, 800);
        })
        .catch((err) => console.log(err));
    }
  }

  // InfoRequests
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

  function exitToQuizPage(){
    setTimeLeft("end");
    setBtnColor(true);
    setQuizToggle(false);
    setLanguage("");
    setWords(words);
    setPoints({ ...points, score: 0 });
    setHighScore(0);
    setActiveBtn(0);
    setScoreToggle(false);
  }

  // Handlers
  function handleUserInput(event) {
    event.preventDefault();
    setActiveBtn(0);
    let buttonInput = event.target.value;
    const addPoints = points.score + 5;
    const minusPoints = points.score - 3;
    let answer = 
      language === "Hiragana" || language === "Katakana"
        ? words.Question.Romaji
        : words.Question.English;
     setBtnColor(true);
    if (buttonInput === "true") {
      setGifState(true)
      
      words.CorrectAnswers.push(answer);
      correctArray.push(answer);
      if (addPoints > highScore) {
        setHighScore(addPoints);
        setPoints({ ...points, score: addPoints });
        dispatch(increment(5))
      } else {
        setPoints({ ...points, score: addPoints });
        dispatch(increment(5))
      }
    } else if (buttonInput === "false" && timeLeft <= 10 && points.score >= 3) {
      words.WrongAnswers.push(answer);
      wrongArray.push(answer)
      setGifState(false)
      setPoints({ ...points, score: minusPoints });
      setTimeLeft("end");
      setQuizToggle(false);
      setScoreToggle(true);
    } else if (buttonInput === "false" && timeLeft <= 10 && points.score <= 3) {
      words.WrongAnswers.push(answer);
      wrongArray.push(answer)
      setGifState(false)
      setPoints({ ...points, score: 0 });
      setTimeLeft("end");
      setQuizToggle(false);
      setScoreToggle(true);
    } else if (buttonInput === "false" && timeLeft >= 10 && points.score <= 3) {
      words.WrongAnswers.push(answer);
      wrongArray.push(answer)
      setPoints({ ...points, score: 0 });
      setTimeLeft(timeLeft - 10);
    } else {
      words.WrongAnswers.push(answer);
      wrongArray.push(answer)
      setGifState(false)
      setTimeLeft(timeLeft - 10);
      setPoints({ ...points, score: minusPoints });
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
      "lastHighScore": highScore
    }

   dispatch(updatePoints(request))
   dispatch(fetchUser())
   setScoreToggle(false);
   }

   function onHandleExitQuiz() {
    let scoreLanguage = "";
    switch (language) {
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
      "language" : language,
      "correct" :  correctArray, 
      "incorrect" : wrongArray,
      "score": points.score, 
     }

     function preSets(){
      setTimeLeft("end");
      setBtnColor(true);
      setLanguage("");
      setExp(true)
      setWords(words);
      if ((correctArray.length === 0) && (wrongArray.length === 0)){
        console.log("no information recorded")
      } else {
      API.updateSessions(props.user._id, sessions)
      .then(update => {
        console.log("Entries saved: " + update.data.data.incorrect.length + " plus " + update.data.data.correct.length)
      }).catch(err => console.log(err));
    }
     }

    console.log(props.user[scoreLanguage]); 

    if (highScore > props.user[scoreLanguage]) {
      console.log(scoreLanguage); 

      switch(language){
        case "English":
       dispatch(engPoints(highScore))
       console.log("Eng HS")
       break;
      case "Hiragana":
        dispatch(hiraPoints(highScore))
        console.log("Hira HS");
        break;
      case "Katakana":
        dispatch(kataPoints(highScore))
        console.log("Kata HS");
        break;
      default:
        dispatch(jpnPoints(highScore))
        console.log("JPN HS")
        break;
      }
      
      preSets()
      setTimeout(() => {
        setQuizToggle(false);
        setScoreToggle(true);
      }, 350);
    } else {
      preSets()
      setTimeout(() => {
        setQuizToggle(false);
        setScoreToggle(true);
      }, 350);
    }
  }

  return (
    <div>
      <Navbar
        highscore={highScore}
        totalscore={props.user.totalScore}
        score={points.score}
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
        highScore={props.user.lastHighScore}
        bgToggle={{display: quizToggle || scoreToggle ? "none" : "flex"}}
        exp={exp}
        />
        <Card
          btnColor={btnColor}
          style={{ display: quizToggle ? "inline-flex" : "none" }}
          question={words.Question}
          userInput={handleUserInput}
          answer={words.Answer}
          disable={activeBtn}
          exitQuiz={onHandleExitQuiz}
          language={language}
          gifState={gifState}
          overlay={overlay}
          engHighScore={props.user.engHighScore}
          jpnHighScore={props.user.jpnHighScore}
          kataHighScore={props.user.kataHighScore}
          hiraHighScore={props.user.hiraHighScore}
          score={points.score}
        />
        <ScoreCard
          score={points.score}
          wrong={words.WrongAnswers}
          correct={words.CorrectAnswers}
          highScore={highScore}
          style={{ display: scoreToggle ? "flex" : "none" }}
          date={today}
          click={onHandleExitScore}
        />
      </div>
      <Footer user={props.user.username}>
        <p
          className="footer px-2 text-2xl inline-flex font-mono capitalize text-red-500"
          style={{ opacity: quizToggle ? "1" : "0" }}
        >
          <span className="footer text-2xl score-sheet text-gray-800 mr-2">Time: </span>{" "}
          {timeLeft}
        </p>
      </Footer>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { fetchUser })(Quiz);
