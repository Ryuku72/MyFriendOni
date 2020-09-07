import API from "../../utils/API";
import Filters from "../../utils/Filters"
import { FETCH_FURIGANA, FETCH_VOCAB, FETCH_SESSIONS, DELETE_SESSION, LETTERS_PAGE, HISTORY_PAGE, VOCAB_PAGE } from "./types";

export const fetchFurigana = () => dispatch => {
  API.getFurigana()
  .then((lists) => {
    let list = lists.data;
    let hiragana = list.map((result) => result.Hiragana);
    let katakana = list.map((result) => result.Katakana);
    let romaji = list.map((result) => result.Romaji);
    let filterArray = list.sort(Filters.compareValues("Hiragana"));
    dispatch({
      type: FETCH_FURIGANA,
      array: [...hiragana, ...katakana, ...romaji],
      database: filterArray
    });
  })
  .catch(err => console.log(err));
};

export const fetchVocab = () => dispatch => {
    API.getVocab()
    .then((lists) => {
        let list = lists.data;
        let jpnArray = list.map(result => result.Japanese)
        let engArray = list.map(result => result.English)
        dispatch({
            type: FETCH_VOCAB,
            array: [...jpnArray, ...engArray],
            database: lists.data
        })
    })
    .catch(err => console.log(err));
}

export const fetchSessions = () => dispatch => {
    const user = localStorage.getItem("tokens");
    API.getSessions(user)
    .then((list) => {
        console.log(list);
        dispatch({
            type: FETCH_SESSIONS,
            payload: list.data
        })
    })
    .catch(err => console.log(err));
}

export const deleteSession = (memoID) => dispatch => {
    API.deleteSession(memoID)
    .then(() => {
        dispatch({
            type: DELETE_SESSION      
          })
    })
    .catch((err) => console.log(err));
} 


export const lettersPage = () => {
    return {
      type: LETTERS_PAGE
    }
  }

  export const historyPage = () => {
    return {
      type: HISTORY_PAGE
    }
  }

  export const vocabPage = () => {
      return {
          type: VOCAB_PAGE
      }
  }
