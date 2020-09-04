import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import SearchNav from "../components/SearchNav";
import SearchCard from "../components/SearchCard";
import Filters from "../utils/Filters"
import Vocab from "../assets/svg/vocab.svg"
import Letters from "../assets/svg/letters.svg"
import LetterCard from "../components/LetterCard";
import HistoryCard from "../components/HistoryCard";

function Study(props) {
  const [pageType, setPageType] = useState()
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
  const [userHistory, setUserHistory] = useState([])
  const location = useLocation()

  // API calls
  useEffect(() => {
    if (location.pathname === "/study/letters") {
      API.getFurigana()
      .then((lists) => {
        let list = lists.data
         let hiragana = list.map(result => result.Hiragana);
         let katakana = list.map(result => result.Katakana);
         let romaji = list.map(result => result.Romaji);
         const database = hiragana.concat(katakana, romaji);
         let filterArray = list.sort(Filters.compareValues("Hiragana"));
         setPageType("Letters")
         setWords({database: filterArray, searchArray: database});
         setSearchState({ ...searchState, error: "", language: "Letters"})
        //console.log(list)
      })
    } else if (location.pathname === "/study/vocab") {
      setPageType("Vocab")
      API.getVocab()
      .then((lists) => {
        let list = lists.data;
        let jpnArray = list.map(result => result.Japanese)
        let engArray = list.map(result => result.English)
        const database = jpnArray.concat(engArray)
        //console.log(database)
        setWords({database: list, searchArray: database})
        setSearchState({ ...searchState, error: "", language: "Vocab"})
      })
    } else {
      setPageType("History")
      const user = localStorage.getItem("tokens");
      //console.log(user)
      API.getSessions(user)
      .then((list) => {
       // console.log(list)
        setUserHistory(list.data)
      })
    }
    getUser();
    // eslint-disable-next-line
  }, [location]);

  // Database Calls
  function getUser() {
    const user = localStorage.getItem("tokens");
    //console.log(user)
    API.getUser(user).then((result) => {
      setUser(result.data);
    });
  }

  function deleteMemo(event){
    event.preventDefault()
    console.log(event.target.value)
    const memoID = event.target.value
    API.deleteSession(memoID)
    .then((result) => {
      console.log(result)
      setPageType("History")
      const user = localStorage.getItem("tokens");
      //console.log(user)
      API.getSessions(user)
      .then((list) => {
       // console.log(list)
        setUserHistory(list.data)
      })
    }).catch((err) => console.log(err));
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
     (searchArray.length === 0) || (searchArray === undefined)){
     setSearchState({ ...searchState, error: "Alert: Invalid Character or Entry", length: 0 })
    } 
    else if (
      ((sortBy === "Sort By") && (orderBy === "Order By")) || 
      ((sortBy === "Japanese") && (orderBy === "Order By")) || 
      ((sortBy === "Japanese") && (orderBy === "Ascend"))
      ) {
     setSearchState({ ...searchState, length: searchLength, results: searchArray, error: "" });
    }
    else if (
      (sortBy === "Sort By" && orderBy === "Descend") || 
      (sortBy === "Japanese" && orderBy === "Descend")
      ) {
     let repArray = searchArray.sort(Filters.compareValues("Japanese", "desc"));
     setSearchState({ ...searchState, length: searchLength, results: repArray, error: "" });
    }
    else if (
      (sortBy === "English" && orderBy === "Order By") || 
      (sortBy === "English" && orderBy === "Ascend")
      ) {
     let repArray = searchArray.sort(Filters.compareValues("English"));
     setSearchState({ ...searchState, length: searchLength, results: repArray, error: "" });
    }
    else if (
      (sortBy === "English" && orderBy === "Descend")
      ) {
     let repArray = searchArray.sort(Filters.compareValues("English", "desc"));
     setSearchState({ ...searchState, length: searchLength, results: repArray, error: "" });
    }
    else if (
      (sortBy === "Row" && orderBy === "Order By") || 
      (sortBy === "Row" && orderBy === "Ascend")
      ) {
     let repArray = searchArray.sort(Filters.compareValues("Row"));
     setSearchState({ ...searchState, length: searchLength, results: repArray, error: "" });
    }
    else {
     let repArray = searchArray.sort(Filters.compareValues("Row", "desc"));
     setSearchState({ ...searchState, length: searchLength, results: repArray, error: "" });
    }
  } 

  //console.log(userHistory)

  return (
    <div className="block">
      <Navbar highscore={0} totalscore={user.totalScore} score={0} />
      <HistoryCard 
        userHistory={userHistory}
        style={{display: pageType === "History" ? "block" : "none"}}
        deleteMemo={deleteMemo}
        />
      <SearchNav
        display={{display: pageType === "Vocab" ? "flex" : "none"}}
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
      <Wrapper wrap={{display: pageType === "Vocab" ? "block" : "none"}}>
        <img src={Vocab} alt="slogan" className="absolute bottom-0 right-0 mb-2" 
        style={{display: searchState.results.length ? "none" : "block"}} />
        <div className="xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3" style={{display: pageType === "Letters" ? "none" : "grid"}}>
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
        </div>
        </Wrapper>
        <img src={Letters} alt="slogan" className="relative p-5 my-2 xl:w-1/2 sm:w-3/4 top-0 left-0" 
        style={{display: pageType === "Letters" ? "block" : "none"}} />
        <div className="xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 mb-4 p-6" style={{display: pageType === "Letters" ? "grid" : "none"}}>
         {words.database.map((result, index) => (
        <LetterCard
         display={{display: pageType === "Letters" ? "flex" : "none"}}
         key={index}
         language={searchState.language}
         hiragana={result.Hiragana}
         katakana={result.Katakana}
         romaji={result.Romaji}
        />
        ))}
        </div>
      <Footer user={user.username}>
        {pageType === "Letters" ? <div></div> :
        <div className="w-1/2 h-full flex flex-wrap items-center justify-start px-4">
        <p className="footerChild font-mono capitalize text-red-500"
          style={{display: pageType === "Vocab" || "History" ? "block" : "none"}}
        >
          <span className="footerChild text-gray-800">
            Results :{" "}
            <span className="footerChild font-mono capitalize text-red-500">
              { pageType === "Vocab" ? searchState.results.length : userHistory.length }
            </span>
          </span>
          {""}
        </p>
        </div>
        }
      </Footer>
    </div>
  );
}

export default Study;
