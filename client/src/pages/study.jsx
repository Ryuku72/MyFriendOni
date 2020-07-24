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

  const [searchState, setSearchState] = useState({
    search: "",
    language: "",
    vocab: [],
    results: [],
    error: "",
    length: 0,
    sort: "Sort By",
    order: "Order By",
  });

  const [orderState, setOrderState] = useState({
    ascend: false,
    descend: false,
  });

  const [sortState, setSortState] = useState({
    Japanese: false,
    English: false,
    Row: false,
  });

  // useEffects
  useEffect(() => {
      API.getVocab()
      .then(lists => {
        let list = lists.data
        setSearchState({...searchState, vocab: list, language: "Vocab"});
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

  //handlers
  function onHandleInputChange(event) {
    event.preventDefault();
    //console.log(event.target.value)
    setSearchState({
      ...searchState,
      search: JSON.stringify(event.target.value.trim().toLowerCase()),
    });
  }

  function onHandleOrder(event) {
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    setSearchState({ ...searchState, order: event.target.name });
    if (event.target.name === "rowTab") {
      setSortState({ Row: !false });
    }
    if (event.target.name === "jpnTab") {
      setSortState({ Japanese: !false });
    }
    if (event.target.name === "engTab") {
      setSortState({ English: !false });
    }
  }

  function onHandleSort(event) {
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    setSearchState({ ...searchState, sort: event.target.name });
    if (event.target.name === "Descend") {
      setOrderState({ descend: !false });
    }
    if (event.target.name === "Ascend") {
      setOrderState({ ascend: !false });
    }
  }

  function clearForm() {
    document.getElementById("create-course-form").reset();
    setSearchState(searchState);
    setOrderState(orderState);
    setSortState(sortState);
  }
  
  return (
    <>
      <Navbar highscore={0} totalscore={user.totalScore} score={0} />
      <SearchNav 
      style={{ opacity: searchState.length ? "1" : "0" }}
      onHandleOrder={onHandleOrder}
      onHandleSort={onHandleSort}
      onHandleInputChange={onHandleInputChange}
      clearForm={clearForm}
      length={searchState.length}
      />
      <Wrapper>
        {searchState.vocab.map((result) => (
          <SearchCard 
          key={result._id}
          language={searchState.language}
          row={result.Row} 
          jpn={result.Japanese} 
          eng={result.English} 
          style={{
            display: searchState.vocab.length ? "block" : "none",
            opacity: searchState.vocab.length ? "1" : "0",
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
            Results : <span className="footer px-2 text-2xl inline-flex font-mono capitalize text-red-500">{searchState.vocab.length}</span> 
          </span>
          {""}
        </p>
      </Footer>
    </>
  );
}

export default Study;
