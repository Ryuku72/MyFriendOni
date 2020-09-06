import {
  FETCH_FURIGANA,
  FETCH_VOCAB,
  SESSIONS_UPDATE,
  FETCH_SESSIONS,
  LETTERS_PAGE,
  HISTORY_PAGE,
  VOCAB_PAGE
} from "../actions/types";

const initialState = {
  letterArray: [],
  letterDb: [],
  vocabArray: [],
  vocabDb: [],
  sessions: [],
  language: "",
  errorMsg: "",
  error: false,
  page: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FURIGANA:
      return {
        ...state,
        letterArray: action.array,
        letterDb: action.database,
      };
    case FETCH_VOCAB:
      return {
        ...state,
        vocabArray: action.array,
        vocabDb: action.database,
      };
    case SESSIONS_UPDATE:
      return {
        ...state,
        sessions: action.payload,
      };
    case FETCH_SESSIONS:
      return {
        ...state,
        sessions: action.payload
      };
    case LETTERS_PAGE:
        return {
            ...state,
            page: "Letters"
        }
    case HISTORY_PAGE:
        return {
            ...state,
            page: "History"
        }
    case VOCAB_PAGE:
        return {
            ...state,
            page: "Vocab"
        }
    default:
      return state;
  }
}
