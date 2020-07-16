import React, {useState, useEffect } from 'react';
import API from "../utils/API";
import Wrapper from '../component/Wrapper'
import LogOutButton from '../component/LogOutButton'
import { useAuth } from "../utils/auth";

function Quiz(props){
const [words, setWordList] = useState([])

useEffect(() => {
    loadVocabList()
  }, [])
  
    //console.log(projects)
  
    // Loads all books and sets them to books
    function loadVocabList() {
    API.getDatabase()
      .then(res => {
        console.log(res.data)
        setWordList(res.data.List)
      })
      .catch(err => console.log(err));
  };

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }


  console.log(words)

    return (
        <div>
          <header>
            <Wrapper>
            <LogOutButton onClick={logOut} title="Log out" onCLick={logOut}/>


            <p>
              My Friend Oni!
            </p>
            {words.map(vocab =>
            <ul key={vocab._id}>
              <li>Row: {vocab.Row}</li>
              <li>Japanese: {vocab.Japanese}</li>
              <li>English: {vocab.English}</li>
            </ul>
            )}
            </Wrapper>
          </header>
        </div>
      );
}

export default Quiz;