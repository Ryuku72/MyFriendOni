import API from "../../utils/API";
import {
  START_QUIZ,
  CLEAR_OVERLAY,
  DISABlE_ACTIVE_BTN,
  LOG_OUT,
  LOG_IN,
  LOADING,
  LOG_ERROR,
  CLEAR_ERROR,
  SET_ERROR,
  LOGOUT_RECIEVED
} from "./types";

export const startQuiz = () => {
  return {
    type: START_QUIZ,
  };
};

export const clearOverlay = () => {
  return {
    type: CLEAR_OVERLAY,
  };
};

export const disableActiveBtn = () => {
  return {
    type: DISABlE_ACTIVE_BTN,
  };
};

export const logIn = (request) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  setTimeout(()=> {
  API.loginUser(request)
    .then((result) => {
      const userID = result.data.data._id;
      localStorage.setItem("tokens", userID);
      dispatch({
        type: LOG_IN,
      });
    })
    .catch((err) => {
      if (err.response.data.errors) {
        let errorMsg = err.response.data.errors.map((err) => err.msg);
        dispatch({
          type: LOG_ERROR,
          payload: errorMsg,
        });
      } else {
        let errorMsg = "Whoops please enter your credentials";
        dispatch({
          type: LOG_ERROR,
          payload: errorMsg,
        });
      }
    });
}, 500)
};

export const logOut = () => (dispatch) => {
  window.localStorage.removeItem("tokens");
  API.logoutUser()
    .then((result) => {
      //console.log(result);
      dispatch({
        type: LOG_OUT,
      });
    })
    .catch((err) => console.log(err));
};

export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

export const setError = (request) => {
    return {
        type: SET_ERROR,
        payload: request
    }
}

export const logOutRecieved = () => {
    return {
        type: LOGOUT_RECIEVED,
    }
}
