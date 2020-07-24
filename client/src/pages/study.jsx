import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import SearchNav from "../components/SearchNav";
import SearchCard from "../components/SearchCard";

function Study() {
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

  const [vocab, setVocab] = useState([]);
  const [language, setLanguage] = useState("")

  // useEffects
  useEffect(() => {
      API.getVocab()
      .then(lists => {
        setVocab(lists.data);
        setLanguage("Vocab")
      })
      .catch(error => console.log(error));
    getUser();
  }, []);

  // Database Calls
  function getUser() {
    const user = localStorage.getItem("tokens");
    const userID = JSON.parse(user)["_id"];
    //console.log(userID)
    API.getUser(userID).then((result) => {
      setUser(result.data);
    });
  }

  console.log(vocab)
  return (
    <>
      <Navbar highscore={0} totalscore={user.totalScore} score={0} />
      <SearchNav />
      <Wrapper>
        {vocab.map((result) => (
          <SearchCard 
          key={result._id}
          language={language}
          row={result.Row} 
          jpn={result.Japanese} 
          eng={result.English} 
          style={{
            display: vocab.length ? "block" : "none",
            opacity: vocab.length ? "1" : "0",
        }}
            />
         
      ))}
      </Wrapper>
      <Footer user={user.username}>
        <p
          className="footer px-2 text-2xl inline-flex font-mono capitalize text-red-500"
          //style=""
        >
          <span className="footer text-2xl score-sheet text-gray-800 mr-2">
            Results : <span className="footer px-2 text-2xl inline-flex font-mono capitalize text-red-500">{vocab.length}</span> 
          </span>
          {""}
        </p>
      </Footer>
    </>
  );
}

export default Study;
