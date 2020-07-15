import React, {useState, useEffect } from 'react';
import API from "./utils/API";

function App() {

  const [words, setWordList] = useState([])
    
  useEffect(() => {
      loadVocabList()
    }, [])

  //console.log(projects)

  // Loads all books and sets them to books
  function loadVocabList() {
  API.getVocab()
    .then(res => {
      console.log(res.data)
      setWordList(res.data)
    })
    .catch(err => console.log(err));
};

console.log(words)


  return (
    <div>
      <header>
        <p>
          My Friend Oni!
        </p>
        {words.map(vocab =>
        <ul>
          <li>id: {vocab._id}</li>
          <li>Japanese: {vocab.Japanese}</li>
          <li>English: {vocab.English}</li>
        </ul>
        )}
      </header>
    </div>
  );
}

export default App;
