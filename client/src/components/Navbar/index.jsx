import React, { useState} from "react";
import { useAuth } from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import quizIcon from "../../assets/svg/monster.svg";
import studyIcon from "../../assets/svg/book2.svg";
import japan from "../../assets/svg/japan.svg";
import english from "../../assets/svg/australia.svg";
import kana from "../../assets/svg/kana.svg";
import hiragana from "../../assets/svg/hiragana.svg";
import menuIcon from "../../assets/svg/watermelon.svg";
import vocab from "../../assets/svg/book3.svg";
import furi from "../../assets/svg/book1.svg";
import player from "../../assets/svg/troll.svg";
import about from "../../assets/svg/sushi.svg";
import outside from "../../assets/svg/plug.svg";
import Stat from "../Stat";
import NavItem from "../NavItem";
import NavDropDown from "../NavDropDown";
import NavDropDownItem from "../NavDropDownItem"

function Navbar(props) {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

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

  // Auth
  const { setAuthTokens } = useAuth();

  function logOut(event) {
    event.preventDefault();
    setAuthTokens();
  }

  const location = useLocation();

  const btnBg01 = location.pathname ===  "/quiz" ? "bg-green-200" : "bg-gray-300";
  const btnBg02 = location.pathname ===  "/study" ? "bg-pink-200" : "bg-gray-300";
  const btnBg03 = location.pathname ===  "/about" ? "bg-orange-200" : "bg-gray-300";
  let navTitle = location.pathname.slice(1)
  console.log(navTitle)

 function bgColor(){
  let color = ""
    switch(navTitle){
      case "quiz":
        color = "text-green-200";
        break;
      case "study":
        color = "text-pink-200"
        break;
      default:
        color = "text-orange-200" 
    }
    return color
  }
//console.log(bgColor)
  return (

<nav className="navbar">
  <div className="navbar-nav w-full inline-flex items-end justify-between">
    <div className="inline-flex items-end px-6">
  <p className={`menuTitle capitalize mr-6 my-2 ${bgColor()}`}>{navTitle} {`//`}</p>
<Stat title="Score" value={props.score}/>
<Stat title="High Score" value={props.highscore}/>
<Stat title="Total Score" value={props.totalscore}/>
</div>
<div className="flex h-full px-4 py-1">
<ul className="flex items-end">
<Link to="/quiz">
<NavItem
          icon={quizIcon}
          color="bg-green-300"
          onHandleDropDown={onHandleDropDownOne}
          open={openOne}
        >
          <NavDropDown
            color={`border-indigo-600 ${btnBg01}`}
            onHandleDropDown={onHandleDropDownOne}
          >
            <p className="m-2 font-mono text-center underline text-2xl">Quiz</p>
            
            <NavDropDownItem
              icon={japan}
              color="p-1 bg-gray-300"
              text="Japanese"
              click={props.startJpnQuiz}
            />
            <NavDropDownItem
              icon={english}
              color="p-1 bg-blue-100"
              text="English"
              click={props.startEngQuiz}
            />
            <NavDropDownItem
              align="flex-row-reverse"
              icon={kana}
              color="bg-orange-500"
              text="Katakana"
              click={props.startKataQuiz}
            />
            <NavDropDownItem
              align="flex-row-reverse"
              icon={hiragana}
              color="bg-green-300 p-2"
              text="Hiragana"
              click={props.startHiraQuiz}
            />
          </NavDropDown>
        </NavItem>
        </Link>
        <Link to="/study">
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
        </Link>
        <Link to="/about">
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
        </Link>
  </ul>
</div>
</div>
</nav>
  );
}

export default Navbar;



