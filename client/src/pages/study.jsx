import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import { lettersPage, historyPage, fetchSessions, deleteSession, vocabPage } from '../redux/actions/study'
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

  let dispatch = useDispatch()
  const location = useLocation()

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
    if (location.pathname === "/study/letters") {
         dispatch(lettersPage())
    } else if (location.pathname === "/study/vocab") {
      dispatch(vocabPage())
      setWords({ database: props.study.vocabDb, searchArray: props.study.vocabArray })
    } else {
      dispatch(historyPage())
    }
    // eslint-disable-next-line
  }, [location]);


  function deleteMemo(event){
    event.preventDefault()
    //console.log(event.target.id)
    const memoID = event.target.id
    dispatch(deleteSession(memoID))
    dispatch(fetchSessions())
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
    let orderBy = searchState.order;
    let sortBy = searchState.sort;

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

    const searchLength = searchArray.length;

    //console.log(searchArray)
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

  return (
    <div className="block">
      <Navbar highscore={0} totalscore={props.user.totalScore} score={0} />
      <HistoryCard 
        userHistory={props.study.sessions}
        style={{display: props.study.page === "History" ? "block" : "none"}}
        deleteMemo={deleteMemo}
        length={props.study.sessions.length}
        />
      <SearchNav
        display={{display: props.study.page === "Vocab" ? "flex" : "none"}}
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
      <Wrapper wrap={{display: props.study.page === "Vocab" ? "block" : "none"}}>
        <img src={Vocab} alt="slogan" className="absolute bottom-0 right-0 mb-2" 
        style={{display: searchState.results.length ? "none" : "block"}} />
        <div className="xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3" style={{display: props.study.page === "Letters" ? "none" : "grid"}}>
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
        <div className="flex flex-wrap justify-between">
        <img src={Letters} alt="slogan" className="relative p-5 my-2 xl:w-1/2 sm:w-3/4 top-0 left-0" 
        style={{display: props.study.page === "Letters" ? "block" : "none"}} />
        <h2 className=" text-gray-800 text-2xl items-end justify-end p-5 my-2 footerChild" style={{display: props.study.page === "Letters" ? "flex" : "none"}}>
            Results :
            <span className="footerChild capitalize ml-2 text-red-500">
              { props.study.page === "Letters" ? props.study.letterDb.length : searchState.results.length }
              </span>
          </h2>
          </div>
        <div className="xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 mb-4 p-6" 
        style={{display: props.study.page === "Letters" ? "grid" : "none"}}>
         {props.study.letterDb.map((result, index) => (
        <LetterCard
         display={{display: props.study.page === "Letters" ? "flex" : "none"}}
         key={index}
         language={props.study.page}
         hiragana={result.Hiragana}
         katakana={result.Katakana}
         romaji={result.Romaji}
        />
        ))}
        </div>
      <Footer user={props.user.username}>     
        <div className="w-1/2 h-full flex flex-wrap items-center justify-start px-4">
        <p className="footerChild font-mono capitalize text-red-500"
        >
          <span className="footerChild text-gray-800">
            Results :{" "}
            <span className="footerChild font-mono capitalize text-red-500">
              { props.study.page === "Letters" ? props.study.letterDb.length : "" }
              { props.study.page === "Vocab" ? searchState.length : "" }
              { props.study.page === "History" ? props.study.sessions.length : "" }
            </span>
          </span>
          {""}
        </p>
        </div>
      </Footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  study: state.study,
  ui: state.ui
})

export default connect(mapStateToProps )(Study);
