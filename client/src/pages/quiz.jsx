import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useAuth } from "../utils/auth";
import bgImg from "../assets/img/background.jpg";
import bgImg2 from "../assets/img/hiraganabg.jpg";
import quizIcon from "../assets/svg/monster.svg";
import studyIcon from "../assets/svg/book2.svg";
import japan from "../assets/svg/japan.svg";
import english from "../assets/svg/australia.svg";
import kana from "../assets/svg/kana.svg";
import hiragana from "../assets/svg/hiragana.svg";
import menuIcon from "../assets/svg/watermelon.svg";
import vocab from "../assets/svg/book3.svg";
import furi from "../assets/svg/book1.svg";
import player from "../assets/svg/troll.svg";
import about from "../assets/svg/sushi.svg";
import outside from "../assets/svg/plug.svg";
import NavDropDown from "../components/NavDropDown";
import NavDropDownItem from "../components/NavDropDownItem";
import Footer from "../components/Footer";
import ScoreCard from "../components/ScoreCard";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";

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
    position: 0,
  });

  const [timeLeft, setTimeLeft] = useState("end");

  //toggles
  const [quizToggle, setQuizToggle] = useState(false);
  const [scoreToggle, setScoreToggle] = useState(false);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [btnColor, setBtnColor] = useState(false);
  const [language, setLanguage] = useState("");

  // useEffects
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setActiveBtn(0);
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

  // Database Calls
  function getUser() {
    const user = localStorage.getItem("tokens");
    const userID = JSON.parse(user)['_id']
    //console.log(userID)
    API.getUser(userID)
    .then(result => {
      setUser(result.data)
    })
  }

  function loadVocabList() {
    if (language === "Hiragana" || language === "Katakana") {
      API.getLetters().then((res) => {
        //console.log(res.data);
        setActiveBtn(0);
        setTimeout(() => {
          setBtnColor(false);
          setActiveBtn(1);
          setWords({
            ...words,
            Answer: res.data.answer,
            Question: res.data.question,
          });
          //console.log(words);
        }, 350);
      });
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
          }, 350);
        })
        .catch((err) => console.log(err));
    }
  }

  // function updateStats(){
  //   console.log("hello")
  // }

  // Auth
  const { setAuthTokens } = useAuth();

  function logOut(event) {
    event.preventDefault();
    setAuthTokens();
  }

  // Date functions
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  // InfoRequests
  function startJpnQuiz(event) {
    event.preventDefault();
    setLanguage("Japanese");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setHighScore(0);
    setActiveBtn(1);
    setTimeLeft(120);
  }

  function startEngQuiz(event) {
    event.preventDefault();
    setLanguage("English");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setHighScore(0);
    setActiveBtn(1);
    setTimeLeft(120);
  }

  function startKataQuiz(event) {
    event.preventDefault();
    setLanguage("Katakana");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setHighScore(0);
    setActiveBtn(1);
    setTimeLeft(120);
  }

  function startHiraQuiz(event) {
    event.preventDefault();
    setLanguage("Hiragana");
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
    setHighScore(0);
    setActiveBtn(1);
    setTimeLeft(120);
  }

  // Handlers
  function handleUserInput(event) {
    event.preventDefault();
    setActiveBtn(0);
    const buttonInput = event.target.value;
    let answer =
      language === "Hiragana" || language === "Katakana"
        ? words.Question.Romaji
        : words.Question.English;
    //console.log(answer);
    //console.log(buttonInput);
    setBtnColor(true);
    if (buttonInput === "true") {
      //console.log("correct")
      const addPoints = points.score + 5;
      words.CorrectAnswers.push(answer);
      if (addPoints > highScore) {
        setHighScore(addPoints);
        setPoints({ ...points, score: addPoints });
      } else {
        setPoints({ ...points, score: addPoints });
      }
    } else if (buttonInput === "false" && timeLeft <= 10 && points.score >= 3) {
      words.WrongAnswers.push(answer);
      const minusPoints = points.score - 3;
      setPoints({ ...points, score: minusPoints });
      setTimeLeft("end");
      setQuizToggle(false);
      setScoreToggle(true);
    } else if (buttonInput === "false" && timeLeft <= 10 && points.score <= 3) {
      words.WrongAnswers.push(answer);
      setPoints({ ...points, score: 0 });
      setTimeLeft("end");
      setQuizToggle(false);
      setScoreToggle(true);
    } else if (buttonInput === "false" && timeLeft >= 10 && points.score <= 3) {
      words.WrongAnswers.push(answer);
      setPoints({ ...points, score: 0 });
      setTimeLeft(timeLeft - 10);
    } else {
      //console.log("wrong")
      //console.log("correct")
      words.WrongAnswers.push(answer);
      const minusPoints = points.score - 3;
      setTimeLeft(timeLeft - 10);
      setPoints({ ...points, score: minusPoints });
    }
    loadVocabList();
  }

  function onHandleDropDownOne() {
    setOpenOne(!openOne);
    setOpenTwo(false);
    setOpenThree(false);
  }

  function onHandleDropDownTwo() {
    setOpenTwo(!openTwo);
    setOpenOne(false);
    setOpenThree(false);
  }

  function onHandleDropDownThree() {
    setOpenThree(!openThree);
    setOpenTwo(false);
    setOpenOne(false);
  }

  function onHandleExitScore() {
    let request = {
      "engHighScore": user.engHighScore,
      "hiraHighScore": user.hiraHighScore,
      "jpnHighScore": user.jpnHighScore,
      "kataHighScore": user.kataHighScore,
      "totalScore": user.totalScore,
    }
    API.updateUser(user._id, request).then(result => {
      getUser()
      }).catch(err => console.log(err));
    setScoreToggle(false);
    setPoints({ ...points, score: 0 });
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

    if (highScore > user[scoreLanguage]) {
      //console.log("correct");
      let totalPoints = points.score + user.totalScore;
      setUser({ ...user, totalScore: totalPoints, [scoreLanguage]: highScore });
      setTimeLeft("end");
      setBtnColor(true);
      setLanguage("");
      setWords(words);
      setTimeout(() => {
        setQuizToggle(false);
        setScoreToggle(true);
      }, 350);
    } else {
      let totalPoints = points.score + user.totalScore;
      setUser({ ...user, totalScore: totalPoints });
      setTimeLeft("end");
      setBtnColor(true);
      setLanguage("");
      setWords(words);
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
      >
        <NavItem
          icon={quizIcon}
          color="bg-green-300"
          onHandleDropDown={onHandleDropDownOne}
          open={openOne}
        >
          <NavDropDown
            color="bg-gray-300 border-teal-500"
            onHandleDropDown={onHandleDropDownOne}
          >
            <p className="m-2 font-mono text-center underline text-2xl">Quiz</p>
            <NavDropDownItem
              icon={japan}
              color="p-1 bg-gray-300"
              text="Japanese"
              click={startJpnQuiz}
            />
            <NavDropDownItem
              icon={english}
              color="p-1 bg-blue-100"
              text="English"
              click={startEngQuiz}
            />
            <NavDropDownItem
              align="flex-row-reverse"
              icon={kana}
              color=" bg-orange-500"
              text="Katakana"
              click={startKataQuiz}
            />
            <NavDropDownItem
              align="flex-row-reverse"
              icon={hiragana}
              color="bg-green-300 p-2"
              text="Hiragana"
              click={startHiraQuiz}
            />
          </NavDropDown>
        </NavItem>
        <NavItem
          icon={studyIcon}
          color="bg-pink-300"
          onHandleDropDown={onHandleDropDownTwo}
          open={openTwo}
        >
          <NavDropDown
            color="bg-gray-300 border-pink-600 mt-1"
            onHandleDropDown={onHandleDropDownTwo}
          >
            <p className="m-2 font-mono text-center underline text-xl">
              Study Material
            </p>
            <NavDropDownItem
              align="flex-row-reverse"
              icon={vocab}
              color="p-1 bg-purple-200"
              text="Vocabulary"
            />
            <NavDropDownItem
              align="flex-row-reverse"
              icon={furi}
              color="p-1 bg-teal-100"
              text="Furigana"
            />
          </NavDropDown>
        </NavItem>
        <NavItem
          icon={menuIcon}
          color="bg-yellow-300"
          onHandleDropDown={onHandleDropDownThree}
          open={openThree}
        >
          <NavDropDown
            color="bg-gray-300 border-yellow-600 mt-2"
            onHandleDropDown={onHandleDropDownThree}
          >
            <p className="m-2 font-mono text-center underline text-xl">
              Systems
            </p>
            <NavDropDownItem
              align="flex-row-reverse"
              icon={player}
              color="p-1 bg-purple-200"
              text="Player Stats"
            />
            <NavDropDownItem
              icon={about}
              color="p-1 bg-green-300"
              text="About"
            />
            <NavDropDownItem
              icon={outside}
              click={logOut}
              color="bg-gray-200"
              text="Log Out"
            />
          </NavDropDown>
        </NavItem>
      </Navbar>
      <div
        className="border-b-2 border-t-2 border-pink-300 flex justify-center items-center"
        style={{
          backgroundImage: quizToggle ? `url(${bgImg2})` : `url(${bgImg})`,
          height: "80vh",
          backgroundSize: "100vw 80vh",
        }}
      >
        <Card
          btnColor={btnColor}
          style={{ display: quizToggle ? "flex" : "none" }}
          question={words.Question}
          userInput={handleUserInput}
          answer={words.Answer}
          disable={activeBtn}
          exitQuiz={onHandleExitQuiz}
          language={language}
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
          className="footer px-2 inline-flex font-mono capitalize text-red-500"
          style={{ opacity: quizToggle ? "1" : "0" }}
        >
          <span className="footer score-sheet text-gray-800 mr-2">Time: </span>{" "}
          {timeLeft}
        </p>
      </Footer>
    </div>
  );
}

export default Quiz;
