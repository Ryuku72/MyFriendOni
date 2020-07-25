import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import SearchNav from "../components/SearchNav";
import SearchCard from "../components/SearchCard";
import Filters from "../utils/Filters"

function Study(props) {
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

  const [words, setWords] = useState({
    searchArray: [],
    database: []
  })

  const initialState = {
    search: JSON.stringify(""),
    language: "Vocab",
    results: [],
    error: "",
    length: 0,
    sort: "Sort By",
    order: "Order By",
  }

  const [searchState, setSearchState] = useState(initialState);

  const [orderState, setOrderState] = useState({
    ascend: false,
    descend: false,
  });

  const [sortState, setSortState] = useState({
    Japanese: false,
    English: false,
    Row: false,
  });

  // API calls
  useEffect(() => {
    API.getVocab()
      .then((lists) => {
        let list = lists.data;
        let rowArray = list.map(result => result.Row)
        let jpnArray = list.map(result => result.Japanese)
        let engArray = list.map(result => result.English)
        const database = rowArray.concat(jpnArray, engArray)
        //console.log(database)
        setWords({database: list, searchArray: database})
      })
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

 //handler

  function onHandleOrder(event) {
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    setSearchState({ ...searchState, order: event.target.name });
    if (event.target.name === "Row") {
      setSortState({ Row: !false });
    }
    if (event.target.name === "Japanese") {
      setSortState({ Japanese: !false });
    }
    if (event.target.name === "English") {
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
    document.getElementById("searchBar").reset();
    //console.log(searchState)
    setSearchState(initialState);
    setOrderState(orderState);
    setSortState(sortState);
    
  }

   function onHandleInputChange(event) {
    event.preventDefault();
    //console.log(event.target.value)
    setSearchState({
      ...searchState, search: JSON.stringify(event.target.value.trim().toLowerCase()),
    });
  }

  function onHandleSubmit(event){
    event.preventDefault()
    //console.log(searchState)
    let searchFeild = searchState.search;
    const entry = JSON.stringify("");
    let newArray = words.database;
    let searchArray = newArray.filter((obj) => {
      var flag = false;
      Object.values(obj).forEach((val) => {
        if (String(val).indexOf(JSON.parse(searchFeild)) > -1) {
          flag = true;
          return;
        }
        return null;
      });
      if (flag) return obj;
      return null;
    });

    //console.log(searchArray)

    let orderBy = searchState.order;
    let sortBy = searchState.sort;
    const searchLength = searchArray.length;
    //console.log(searchArray.length)

    if (
     searchArray.length === 0 || searchArray === undefined){
     setSearchState({ ...searchState, error: "Alert: Invalid Character or Entry", length: 0 })
    } 
    else if (
      searchFeild === entry && sortBy === "Sort By" && orderBy === "Order By" || 
      searchFeild === entry && sortBy === "Japanese" && orderBy === "Order By" || 
      searchFeild === entry && sortBy === "Japanese" && orderBy === "Ascend"
      ) {
     setSearchState({ ...searchState, length: searchLength, results: searchArray });
    }
    else if (
      searchFeild === entry && sortBy === "Sort By" && orderBy === "Descend" || 
      searchFeild === entry && sortBy === "Japanese" && orderBy === "Descend"
      ) {
     let repArray = searchArray.sort(Filters.compareValues("Japanese", "desc"));
     setSearchState({ ...searchState, length: searchLength, results: repArray });
    }
    else{
      setSearchState({ ...searchState, length: searchLength, results: searchArray });
    }
  } 

  //console.log(searchState)

  return (
    <>
      <Navbar highscore={0} totalscore={user.totalScore} score={0} />
      <SearchNav
        name={words.searchArray}
        length={searchState.length}
        order={searchState.order}
        sort={searchState.sort}
        onHandleOrder={onHandleOrder}
        onHandleSort={onHandleSort}
        onHandleInputChange={onHandleInputChange}
        onHandleSubmit={onHandleSubmit}
        clearForm={clearForm}
        alert={{ opacity: searchState.error ? "1" : "0" }} 
        error={ searchState.error }
        style={{ opacity: searchState.length ? "1" : "0" }}
        row={{ color: sortState.Row ? "#f56565" : "#4a5568" }}
        jpn={{ color: sortState.Japanese ? "#f56565" : "#4a5568" }}
        eng={{ color: sortState.English ? "#f56565" : "#4a5568" }}
        ascend={{ color: orderState.ascend ? "#f56565" : "#4a5568" }}
        descend={{ color: orderState.descend ? "#f56565" : "#4a5568" }}
      />
      <Wrapper>
        {searchState.results.map((result, index) => (
          <SearchCard
            key={index}
            language={searchState.language}
            row={result.Row}
            jpn={result.Japanese}
            eng={result.English}
            style={{
            display: searchState.results.length ? "flex" : "none",
            opacity: searchState.results.length ? "1" : "0",
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
            Results :{" "}
            <span className="footer px-2 text-2xl inline-flex font-mono capitalize text-red-500">
              {searchState.results.length}
            </span>
          </span>
          {""}
        </p>
      </Footer>
    </>
  );
}

export default Study;
