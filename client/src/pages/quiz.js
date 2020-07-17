import React, {useState, useEffect } from 'react';
import API from "../utils/API";
import Wrapper from '../component/Wrapper'
import { useAuth } from "../utils/auth";

function Quiz(props){
const [words, setWordList] = useState([])

useEffect(() => {
    loadVocabList()
  }, [])

    const { setAuthTokens } = useAuth();
  
    function logOut() {
      setAuthTokens();
    }
  
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


  console.log(words)

    return (
        <div>
          <header>
            <Wrapper>

            <button onClick={logOut}>Log Out</button>
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