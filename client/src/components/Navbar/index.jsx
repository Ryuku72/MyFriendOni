import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/ui';
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
  let dispatch = useDispatch()
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  useEffect(()=> {
    if (props.ui.loggedIn === false){
      history.push("/");
    }
    // eslint-disable-next-line
  },[props.ui.loggedIn])

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

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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

  function logout(event) {
    event.preventDefault();
      dispatch(logOut())
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
            onClick={onHandleDropDownOne}
          >
            <NavDropDown
              color={`border-indigo-600 ${btnBg01}`}
              onHandleDropDown={onHandleDropDownOne}
            >
              <Link to="/quiz" onClick={onHandleDropDownOne} className="my-2 mx-1 font-mono text-center underline flex text-xl justify-center">
                Quiz
              </Link>
              <Link to="/quiz/hiragana" onClick={onHandleDropDownOne}>
                <NavDropDownItem
                  icon={hiragana}
                  align="text-right"
                  IconAlign="mr-6"
                  color="p-1 bg-green-300"
                  text="LVL 1 Hiragana"
                  click={props.startHiraQuiz}
                />
                </Link>
                  <Link to="/quiz/katakana" onClick={onHandleDropDownOne}>
                <NavDropDownItem
                  icon={kana}    
                  align="text-right"
                  IconAlign="mr-6"  
                  color="p-1 bg-orange-500"
                  text="LVL 2 Katakana"
                  click={props.startKataQuiz}
                />
              </Link>
              <Link to="/quiz/japanese" onClick={onHandleDropDownOne}>
                <NavDropDownItem
                  icon={japan}
                  align="flex-row-reverse justify-between"
                  IconAlign="ml-6"   
                  color="p-1 bg-gray-300"
                  text="LVL 3 Japanese"
                  click={props.startJpnQuiz}
                />
              </Link>
              <Link to="/quiz/english" onClick={onHandleDropDownOne}>
                <NavDropDownItem
                  align="flex-row-reverse justify-between"
                  IconAlign="ml-6"  
                  icon={english}
                  color="p-1 bg-blue-100"
                  text="LVL 4 English "
                  click={props.startEngQuiz}
                />
              </Link>
            </NavDropDown>
          </NavItem>
          <NavItem
            icon={studyIcon}
            color="bg-pink-300"
            onHandleDropDown={onHandleDropDownTwo}
            open={openTwo}
            onClick={onHandleDropDownTwo}
          >
            <NavDropDown
              color={`border-pink-600 mt-1 ${btnBg02}`}
              onHandleDropDown={onHandleDropDownTwo}
            >
              <Link to="/study/history" onClick={onHandleDropDownTwo} className="my-2 mx-1 font-mono text-center underline flex text-xl justify-center">
                Study Material
              </Link>
              <Link to="/study/letters" onClick={onHandleDropDownTwo}>
                <NavDropDownItem
                  align="flex-row-reverse justify-between"
                  IconAlign="ml-6" 
                  icon={furi}
                  color="p-1 bg-green-200"
                  text="Letter Chart"
                />
              </Link>
              <Link to="/study/vocab" onClick={onHandleDropDownTwo}>
                <NavDropDownItem
                  align="flex-row-reverse justify-between"
                  IconAlign="ml-6" 
                  icon={vocab}
                  color="p-1 bg-purple-200"
                  text="Vocab Search"
                />
              </Link>
              <Link to="/study/history" onClick={onHandleDropDownTwo}>
                <NavDropDownItem
                  icon={pHistory}
                  align="text-right"
                  IconAlign="mr-6 justify-between" 
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
            onClick={onHandleDropDownThree}
          >
            <NavDropDown
              color={`bg-gray-300 border-yellow-600 mt-2 ${btnBg03}`}
              onHandleDropDown={onHandleDropDownThree}
            >
              <Link to="/about" onClick={onHandleDropDownThree} className="my-2 mx-1 font-mono text-center underline flex text-xl justify-center">
                Systems
              </Link>
              <Link to="/about/player" onClick={onHandleDropDownThree}>
                <NavDropDownItem
                  align="flex-row-reverse justify-between"
                  IconAlign="ml-6 justify-between" 
                  icon={player}
                  color="p-1 bg-purple-200"
                  text="Player Stats"
                />
              </Link>
              <Link to="/about/info" onClick={onHandleDropDownThree}>
                <NavDropDownItem
                  icon={about}
                  align="flex-row-reverse justify-between"
                  IconAlign="ml-6 justify-between" 
                  color="p-1 bg-green-300"
                  text="About Me"
                />
              </Link>
              <NavDropDownItem
                icon={outside}
                align="justify-between"
                IconAlign="mr-6 justify-between" 
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

const mapStateToProps = (state) => ({
  user: state.user,
  quiz: state.quiz,
  ui: state.ui
})

export default connect(mapStateToProps )(Navbar);
