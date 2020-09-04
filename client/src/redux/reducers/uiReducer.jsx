import {
  START_QUIZ,
  CLEAR_OVERLAY,
  RECIEVE_WORDS,
  DISABlE_ACTIVE_BTN,
  RECIEVE_LETTERS,
  EXIT_QUIZ,
  ADD_POINTS,
  MINUS_POINTS,
  SCORE_PAGE,
  ZERO_POINTS,
  UPDATE_POINTS,
  SESSIONS_UPDATE,
  SESSIONS_NO_UPDATE,
  LOG_OUT,
  LOG_IN, 
  LOADING,
  LOG_ERROR,
  CLEAR_ERROR,
  SET_ERROR,
  LOGOUT_RECIEVED
} from "../actions/types";

const initialState = {
  loggedIn: false,
  error: false,
  errorMsg: "",
  loading: false,
  quizExp: false,
  quizPage: false,
  scorePage: false,
  overlay: false,
  gifState: "",
  activeBtn: 0,
  btnColor: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_QUIZ:
      return {
        ...state,
        quizPage: true,
        scorePage: false,
        btnColor: false,
        activeBtn: 1,
        overlay: true,
      };
    case CLEAR_OVERLAY:
      return {
        ...state,
        overlay: false,
      };
    case DISABlE_ACTIVE_BTN:
      return {
        ...state,
        activeBtn: 0,
      };
    case RECIEVE_LETTERS:
      return {
        ...state,
        activeBtn: 1,
        btnColor: false,
      };

    case RECIEVE_WORDS:
      return {
        ...state,
        activeBtn: 1,
        btnColor: false,
      };
    case EXIT_QUIZ:
      return {
        ...state,
        btnColor: true,
        quizPage: false,
        activeBtn: 0,
        scorePage: false,
      };
    case ADD_POINTS:
      return {
        ...state,
        gifState: true,
        btnColor: true,
        activeBtn: 0,
      };
    case MINUS_POINTS:
      return {
        ...state,
        gifState: false,
        btnColor: true,
        activeBtn: 0,
      };
    case SCORE_PAGE:
      return {
        ...state,
        scorePage: true,
        quizPage: false,
      };
    case ZERO_POINTS:
      return {
        ...state,
        gifState: false,
        btnColor: true,
        activeBtn: 0,
      };
    case UPDATE_POINTS:
      return {
        ...state,
        scorePage: false,
      };
    case SESSIONS_UPDATE:
      return {
        ...state,
        btnColor: true,
        quizExp: true,
      };
    case SESSIONS_NO_UPDATE:
      return {
        ...state,
        btnColor: true,
        quizExp: true,
      };
    case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        error: true,
        errorMsg: "#Logged Out",
        quizExp: false,
        loading: true,
        quizPage: false,
        scorePage: false,
        overlay: false,
        gifState: "",
        activeBtn: 0,
        btnColor: false,
      };
    case LOADING: 
    return {
      ...state,
      loading: true,
    }
    case LOGOUT_RECIEVED:
        return {
            ...state,
            loading: false,
        }
    case LOG_IN:
    return {
      ...state,
      loading: false,
      loggedIn: true
    }
    case LOG_ERROR:
      return {
        ...state,
        loggedIn: false,
        error: true,
        errorMsg: [action.payload],
        loading: false,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMsg: ""
      }
    case SET_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}
