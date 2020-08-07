import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import API from "../../utils/API";
import quizIcon from "../../assets/svg/monster.svg";
import studyIcon from "../../assets/svg/book2.svg";
import japan from "../../assets/svg/japan.svg";
import english from "../../assets/svg/australia.svg";
import kana from "../../assets/svg/kana.svg";
import hiragana from "../../assets/svg/hiragana.svg";
import menuIcon from "../../assets/svg/watermelon.svg";
import vocab from "../../assets/svg/book3.svg";
import pHistory from "../../assets/svg/kanji.svg";
import furi from "../../assets/svg/book4.svg";
import player from "../../assets/svg/troll.svg";
import about from "../../assets/svg/sushi.svg";
import outside from "../../assets/svg/plug.svg";
import Stat from "../Stat";
import NavItem from "../NavItem";
import NavDropDown from "../NavDropDown";
import NavDropDownItem from "../NavDropDownItem";
import "./style.css";

function Navbar(props) {
  let history = useHistory();
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);


  function useOutsideAlerter(ref) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setOpenOne(false);
              setOpenTwo(false);
              setOpenThree(false)
            }
        }
  
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
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

  async function logout(event) {
    event.preventDefault();
    try {
      await API.logoutUser().then((result) => console.log(result));
      window.localStorage.removeItem("tokens");
      history.push("/");
    } catch (e) {
      console.log(e.message);
    }
  }

  const location = useLocation();

  const btnBg01 = location.pathname.includes("/quiz")
    ? "bg-green-200"
    : "bg-gray-300";
  const btnBg02 = location.pathname.includes("/study")
    ? "bg-pink-200"
    : "bg-gray-300";
  const btnBg03 = location.pathname.includes("/about")
    ? "bg-orange-200"
    : "bg-gray-300";

  const quizTitle = () => {
    let title;
    if (location.pathname.includes("/quiz")) {
      title = "Quiz";
    } else if (location.pathname.includes("/study")) {
      title = "Study";
    } else {
      title = "About";
    }
    return title;
  };

  let color = "";
  if (location.pathname.includes("/quiz")) {
    color = "text-green-300";
  } else if (location.pathname.includes("/study")) {
    color = "text-pink-300";
  } else {
    color = "text-orange-300";
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  return (
    <nav className="navbar">
      <div className="navbar-nav inline-flex flex-wrap items-end justify-between">
        <div className="locationDiv inline-flex items-end h-full">   
            <span className={`menuTitle capitalize ${color}`}>
              {quizTitle()} {`//`}
            </span>
        </div>
        <div className="inline-flex justify-start items-end pointsDiv">
          <Stat title="Score" value={props.score} />
          <Stat title="High Score" value={props.highscore} />
          <Stat title="Total Score" value={props.totalscore} />
        </div>
        <div ref={wrapperRef}>
        <div className="iconsDiv flex justify-between items-end">
          <NavItem
            icon={quizIcon}
            color="bg-green-300"
            open={openOne}
            onHandleDropDown={onHandleDropDownOne}
          >
            <NavDropDown
              color={`border-indigo-600 ${btnBg01}`}
              onHandleDropDown={onHandleDropDownOne}
            >
              <span className="m-2 font-mono text-center underline flex text-xl justify-center">
                Quiz
              </span>
              <Link to="/quiz/hiragana">
                <NavDropDownItem
                  align="flex-row-reverse"
                  icon={hiragana}
                  IconAlign={"flex justify-end"}
                  color="p-1 bg-green-300"
                  text="LVL 1 Hiragana"
                  click={props.startHiraQuiz}
                />
                  <Link to="/quiz/katakana">
                <NavDropDownItem
                  align="flex-row-reverse"
                  icon={kana}
                  IconAlign={"flex justify-end"}
                  color="p-1 bg-orange-500"
                  text="LVL 2 Katakana"
                  click={props.startKataQuiz}
                />
              </Link>
              <Link to="/quiz/japanese">
                <NavDropDownItem
                  icon={japan}
                  color="p-1 bg-gray-300"
                  text="LVL 3 Japanese"
                  click={props.startJpnQuiz}
                />
              </Link>
              <Link to="/quiz/english">
                <NavDropDownItem
                  icon={english}
                  color="p-1 bg-blue-100"
                  text="LVL 4 English"
                  click={props.startEngQuiz}
                />
              </Link>
              </Link>
            </NavDropDown>
          </NavItem>
          <NavItem
            icon={studyIcon}
            color="bg-pink-300"
            onHandleDropDown={onHandleDropDownTwo}
            open={openTwo}
          >
            <NavDropDown
              color={`border-pink-600 mt-1 ${btnBg02}`}
              onHandleDropDown={onHandleDropDownTwo}
            >
              <p className="m-2 font-mono text-center underline text-xl">
                Study Material
              </p>
              <Link to="/study/letters">
                <NavDropDownItem
                  align="flex-row-reverse"
                  icon={furi}
                  IconAlign={"flex justify-end"}
                  color="p-1 bg-green-200"
                  text="Letter Chart"
                />
              </Link>
              <Link to="/study/vocab">
                <NavDropDownItem
                  align="flex-row-reverse"
                  icon={vocab}
                  IconAlign={"flex justify-end"}
                  color="p-1 bg-purple-200"
                  text="Vocabulary Search"
                />
              </Link>
              <Link to="/study/history">
                <NavDropDownItem
                  align="flex-row-reverse"
                  icon={pHistory}
                  IconAlign={"flex justify-end"}
                  color="p-1 bg-yellow-200"
                  text="Player History"
                />
              </Link>
            </NavDropDown>
          </NavItem>
          <NavItem
            icon={menuIcon}
            color="bg-yellow-300"
            onHandleDropDown={onHandleDropDownThree}
            open={openThree}
          >
            <NavDropDown
              color={`bg-gray-300 border-yellow-600 mt-2 ${btnBg03}`}
              onHandleDropDown={onHandleDropDownThree}
            >
              <p className="m-2 font-mono text-center underline text-xl">
                Systems
              </p>
              <Link to="/about/player">
                <NavDropDownItem
                  align="flex-row-reverse"
                  icon={player}
                  IconAlign={"flex justify-end"}
                  color="p-1 bg-purple-200"
                  text="Player Stats"
                />
              </Link>
              <Link to="/about/info">
                <NavDropDownItem
                  icon={about}
                  color="p-1 bg-green-300"
                  text="About Me"
                />
              </Link>
              <NavDropDownItem
                icon={outside}
                click={logout}
                color="bg-gray-200"
                text="Log Out"
              />
            </NavDropDown>
          </NavItem>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
