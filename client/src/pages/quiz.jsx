import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../utils/API";
import Footer from "../components/Footer";
import ScoreCard from "../components/ScoreCard";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import QuizBackground from "../components/QuizBackground";


function Quiz(props) {
  // States
  const [user, setUser] = useState({
    createdAt: "",
    engHighScore: 0,
    hiraHighScore: 0,
    jpnHighScore: 0,
    kataHighScore: 0,
    password: "",
    totalScore: 0,
    updatedAt: "",
    username: "",
  });
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
  const location = useLocation()

  // Date functions
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  // useEffects
  useEffect(() => {
    setActiveBtn(0);
    loadVocabList();
    function settings(inputLanguage){
      setLanguage(inputLanguage)
      setWords({...words,WrongAnswers: [], CorrectAnswers: []})
      setQuizToggle(true);
      setBtnColor(false);
      setScoreToggle(false);
      setPoints({ ...points, score: 0 });
      setHighScore(0);
      setActiveBtn(1);
      setTimeLeft(124);
      setOverlay(true)
      setExp(false)
      setTimeout(() => {
        setOverlay(false)
      },3500)
    }

    getUser();
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
    if (timeLeft <= 0) {
      onHandleExitQuiz();
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Database Calls
  function getUser() {
    const user = localStorage.getItem("tokens");
    //console.log(userID)
    API.getUser(user)
    .then(result => {
      console.log(result.data)
      setUser(result.data)
    }).catch((err) => console.log(err));
  }

  function loadVocabList() {
    if (language === "Hiragana" || language === "Katakana") {
      API.getLetters().then((res) => {
        //console.log(res.data);
        setActiveBtn(0);
        setTimeout(() => {
          setBtnColor(false)
          setActiveBtn(1);
          setWords({
            ...words,
            Answer: res.data.answer,
            Question: res.data.question,
          });
          //console.log(words);
        }, 800);
      }).catch((err) => console.log(err));
    } else {
      API.getJapanese()
        .then((res) => {
          setActiveBtn(0);
          //console.log(res.data);
          setTimeout(() => {
            setBtnColor(false);
            setActiveBtn(1);
            setWords({
              ...words,
              Answer: res.data.answer,
              Question: res.data.question,
            });
            // console.log(words)
          }, 800);
        })
        .catch((err) => console.log(err));
    }
  }

  // InfoRequests
  function startJpnQuiz(event) {
    event.preventDefault();
    setLanguage("Japanese");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setWords({...words,WrongAnswers: [], CorrectAnswers: []})
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

  function startEngQuiz(event) {
    event.preventDefault();
    setLanguage("English");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setWords({...words,WrongAnswers: [], CorrectAnswers: []})
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

  function startKataQuiz(event) {
    event.preventDefault();
    setLanguage("Katakana");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setWords({...words,WrongAnswers: [], CorrectAnswers: []})
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

  function startHiraQuiz(event) {
    event.preventDefault();
    setLanguage("Hiragana");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setWords({...words,WrongAnswers: [], CorrectAnswers: []})
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
    const addScore = user.totalScore + 5;
    const minusPoints = points.score - 3;
    const minusScore = user.totalScore - 3
    let answer = 
      language === "Hiragana" || language === "Katakana"
        ? words.Question.Romaji
        : words.Question.English;
      // console.log(event.target.value)
      // console.log("Answer is: " + JSON.stringify(words.Question))
    //console.log(answerObj)
    //console.log(words.Question)
    //console.log(answer);
    //console.log(buttonInput);
    //console.log(event.target)
     setBtnColor(true);
    if (buttonInput === "true") {
      //console.log("correct")
      setGifState(true)
      
      words.CorrectAnswers.push(answer);
      correctArray.push(answer);
      if (addPoints > highScore) {
        setHighScore(addPoints);
        setPoints({ ...points, score: addPoints });
        setUser({...user, totalScore: addScore})
      } else {
        setPoints({ ...points, score: addPoints });
        setUser({...user, totalScore: addScore})
      }
    } else if (buttonInput === "false" && timeLeft <= 10 && points.score >= 3) {
      words.WrongAnswers.push(answer);
      wrongArray.push(answer)
      setGifState(false)
      setPoints({ ...points, score: minusPoints });
      setUser({...user, totalScore: minusScore})
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
      //console.log("wrong")
      //console.log("correct")
      words.WrongAnswers.push(answer);
      wrongArray.push(answer)
      setGifState(false)
      setTimeLeft(timeLeft - 10);
      setPoints({ ...points, score: minusPoints });
      setUser({...user, totalScore: minusScore})
    }
     loadVocabList();
  }

  function onHandleExitScore() {
    //console.log(user.totalScore)

    let request = {
      "engHighScore": user.engHighScore,
      "hiraHighScore": user.hiraHighScore,
      "jpnHighScore": user.jpnHighScore,
      "kataHighScore": user.kataHighScore,
      "totalScore": user.totalScore,
      "lastHighScore": highScore
    }
    console.log("totalScore " + user.totalScore)
    API.updatePoints(user._id, request)
    .then(result => {
        //console.log(result);
        getUser()
      }).catch(err => console.log(err));  
    setScoreToggle(false);
    //console.log(user);
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
  
   // console.log(correctArray)

    function preSets(){
      setTimeLeft("end");
      setBtnColor(true);
      setLanguage("");
      setExp(true)
      setWords(words);
      if ((correctArray.length === 0) && (wrongArray.length === 0)){
        console.log("no information recorded")
      } else {
      API.updateSessions(user._id, sessions)
      .then(update => {
        console.log("Entries saved: " + update.data.data.incorrect.length + " plus " + update.data.data.correct.length)
      }).catch(err => console.log(err));
    }
    }

    console.log(user[scoreLanguage]); 

    if (highScore > user[scoreLanguage]) {
      console.log(scoreLanguage); 

      switch(language){
        case "English":
       setUser({...user, engHighScore: highScore });
       console.log("Eng HS")
       break;
      case "Hiragana":
        setUser({...user, hiraHighScore: highScore });
        console.log("Hira HS");
        break;
      case "Katakana":
        setUser({...user, kataHighScore: highScore })
        console.log("Kata HS");
        break;
      default:
        setUser({...user, jpnHighScore: highScore })
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
        totalscore={user.totalScore}
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
        user={user.username} 
        highScore={user.lastHighScore}
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
          engHighScore={user.engHighScore}
          jpnHighScore={user.jpnHighScore}
          kataHighScore={user.kataHighScore}
          hiraHighScore={user.hiraHighScore}
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
      <Footer user={user.username}>
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

export default Quiz;
