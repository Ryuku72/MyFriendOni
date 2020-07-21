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
  const [user, setUser] = useState({});
  const [points, setPoints] = useState({ score: 0 });
  const [timeLeft, setTimeLeft] = useState("end");
  const [words, setWords] = useState({
    Question: [],
    Answer: [],
    btnColor: [],
    WrongAnswers: [],
    CorrectAnswers: [],
    position: 0,
  });
  const [quizToggle, setQuizToggle] = useState(false);
  const [scoreToggle, setScoreToggle] = useState(false);
  const [highScore, setHighScore] = useState(0)
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [btnColor, setBtnColor] = useState(false);

  // useEffects
  useEffect(() => {
    setActiveBtn(0);
    loadVocabList();
    getUser();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft("end");
      setQuizToggle(false);
      setScoreToggle(true);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // useRef

  // Database Calls

  function getUser() {
    const user = localStorage.getItem("tokens");
    setUser(JSON.parse(user));
    //console.log(JSON.parse(user))
  }

  function loadVocabList() {
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
        }, 350);
      })
      .catch((err) => console.log(err));
  }

  // Auth
  const { setAuthTokens } = useAuth();

  function logOut(event) {
    event.preventDefault();
    setAuthTokens();
  }

  // functions
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  // Handlers

  function startQuiz(event) {
    event.preventDefault();
    setQuizToggle(true);
    setBtnColor(false);
    setScoreToggle(false);
    setActiveBtn(1);
    setTimeLeft(120);
    console.log("Quiz Started");
  }

  function handleUserInput(event) {
    event.preventDefault();
    setActiveBtn(0);
    const buttonInput = event.target.value;
    const answer = words.Question.English;
    //console.log(answer)
    
    setBtnColor(true);
    if (buttonInput === "true") {
      //console.log("correct")
      const addPoints = points.score + 5;
      words.CorrectAnswers.push(answer);
      if (addPoints > highScore) {
        setHighScore(addPoints)
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
    setScoreToggle(false);
    setPoints({...points, score: 0})
    setHighScore(0)
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
              click={startQuiz}
            />
            <NavDropDownItem
              icon={english}
              color="p-1 bg-blue-100"
              text="English"
            />
            <NavDropDownItem
              align="flex-row-reverse"
              icon={hiragana}
              icon={kana}
              color=" bg-orange-500"
              text="Katakana"
            />
            <NavDropDownItem
              align="flex-row-reverse"
              icon={hiragana}
              color="bg-green-300 p-2"
              text="Hiragana"
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
          question={words.Question.Japanese}
          userInput={handleUserInput}
          answer={words.Answer}
          disable={activeBtn}
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
          className="px-2 inline-flex text-3xl font-mono capitalize text-red-500"
          style={{ opacity: quizToggle ? "1" : "0" }}
        >
          <span className="score-sheet text-gray-800 text-4xl mr-2">Time: </span> {timeLeft}
        </p>
      </Footer>
    </div>
  );
}

export default Quiz;
