import {
  JPN_QUIZ,
  ENG_QUIZ,
  KATA_QUIZ,
  HIRA_QUIZ,
  QUIZ_PAGE,
  RECIEVE_WORDS,
  RECIEVE_LETTERS,
  EXIT_QUIZ,
  ADD_POINTS,
  MINUS_POINTS,
  SET_HIGHSCORE,
  ZERO_POINTS,
  SESSIONS_UPDATE,
  SESSIONS_NO_UPDATE,
  LOG_OUT,
} from "../actions/types";

const initialState = {
  points: 0,
  highScore: 0,
  language: "",
  Question: [],
  Answers: [],
  WrongAnswers: [],
  CorrectAnswers: [],
  WrongArray: [],
  CorrectArray: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case JPN_QUIZ:
      return {
        ...state,
        language: "Japanese",
        WrongAnswers: [],
        CorrectAnswers: [],
        points: 0,
        HighScore: 0,
        CorrectArray: [],
        WrongArray: [],
      };
    case ENG_QUIZ:
      return {
        ...state,
        language: "English",
        WrongAnswers: [],
        CorrectAnswers: [],
        points: 0,
        HighScore: 0,
        CorrectArray: [],
        WrongArray: [],
      };
    case HIRA_QUIZ:
      return {
        ...state,
        language: "Hiragana",
        WrongAnswers: [],
        CorrectAnswers: [],
        points: 0,
        HighScore: 0,
        CorrectArray: [],
        WrongArray: [],
      };
    case KATA_QUIZ:
      return {
        ...state,
        language: "Katakana",
        WrongAnswers: [],
        CorrectAnswers: [],
        points: 0,
        HighScore: 0,
        CorrectArray: [],
        WrongArray: [],
      };
    case QUIZ_PAGE:
      return {
        ...state,
        WrongAnswers: [],
        CorrectAnswers: [],
      };
    case RECIEVE_LETTERS:
      return {
        ...state,
        Answers: action.payload.answer,
        Question: action.payload.question,
      };
    case RECIEVE_WORDS:
      return {
        ...state,
        Answers: action.payload.answer,
        Question: action.payload.question,
      };
    case EXIT_QUIZ:
      return {
        ...state,
        points: 0,
        highScore: 0,
        Question: [],
        Answers: [],
        WrongAnswers: [],
        CorrectAnswers: [],
      };
    case ADD_POINTS:
      return {
        ...state,
        points: state.points + 5,
        CorrectArray: [...state.CorrectArray, action.payload],
        CorrectAnswers: [...state.CorrectAnswers, action.payload],
      };
    case MINUS_POINTS:
      return {
        ...state,
        points: state.points - 5,
        WrongArray: [...state.WrongArray, action.payload],
        WrongAnswers: [...state.WrongAnswers, action.payload],
      };
    case SET_HIGHSCORE:
      return {
        ...state,
        highScore: action.payload,
      };
    case ZERO_POINTS:
      return {
        ...state,
        points: 0,
        WrongArray: [...state.WrongArray, action.payload],
        WrongAnswers: [...state.WrongAnswers, action.payload],
      };
    case SESSIONS_UPDATE:
      return {
        ...state,
        language: "",
        Question: [],
        Answers: [],
        WrongAnswers: [],
        CorrectAnswers: [],
      };
    case SESSIONS_NO_UPDATE:
      return {
        ...state,
        language: "",
        Question: [],
        Answers: [],
        WrongAnswers: [],
        CorrectAnswers: [],
      };
    case LOG_OUT:
      return {
        ...state,
        points: 0,
        highScore: 0,
        language: "",
        Question: [],
        Answers: [],
        WrongAnswers: [],
        CorrectAnswers: [],
        WrongArray: [],
        CorrectArray: [],
      };
    default:
      return state;
  }
}
