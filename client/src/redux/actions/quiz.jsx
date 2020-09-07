import API from '../../utils/API'
import { JPN_QUIZ, ENG_QUIZ, HIRA_QUIZ, KATA_QUIZ, QUIZ_PAGE, RECIEVE_WORDS, RECIEVE_LETTERS, EXIT_QUIZ, EXIT_SCORE, SET_HIGHSCORE, SCORE_PAGE, ZERO_POINTS, SESSIONS_UPDATE, SESSIONS_NO_UPDATE } from'./types'

export const jpnQuiz = () => {
    return {
        type: JPN_QUIZ
    }
};

export const engQuiz = () => {
    return {
        type: ENG_QUIZ
    }
};

export const hiraQuiz = () => {
    return {
        type: HIRA_QUIZ
    }
};

export const kataQuiz = () => {
    return {
        type: KATA_QUIZ
    }
};

export const quizPage = () => {
   return{ 
        type: QUIZ_PAGE,
}
};

export const loadWords = () => dispatch => {
    API.getJapanese()
    .then((res) => {
        dispatch({
            type: RECIEVE_WORDS,
            payload: res.data
        })
    })
    .catch((err) => console.log(err));
}

export const loadLetters = () => dispatch => {
    API.getLetters()
    .then((res) => {
        dispatch({
            type: RECIEVE_LETTERS,
            payload: res.data
        })
    })
    .catch((err) => console.log(err));
}

export const exitQuiz = () => {
    return {
        type: EXIT_QUIZ
    }
}

export const exitScore = () => {
    return {
        type: EXIT_SCORE
    }
}

export const addHighScore = nr => {
    return {
        type: SET_HIGHSCORE,
        payload: nr
    }
}

export const scorePage = () => {
    return {
        type: SCORE_PAGE
    }
}

export const zeroPoints = nr => {
    return {
        type: ZERO_POINTS,
        payload: nr
    }
}

export const sessionUpdate = request => dispatch => {
    const user = localStorage.getItem("tokens");
    // console.log(request)
    API.updateSessions(user, request)
    .then(result => {
        //console.log(result.data)
        //console.log("Entries saved: " + result.data.data.incorrect.length + " plus " + result.data.data.correct.length)
        dispatch({
            type: SESSIONS_UPDATE,
            payload: result.data
        })
    })
    .catch(err => console.log(err));
}

export const sessionNoUpdate = () => {
    return {
        type: SESSIONS_NO_UPDATE,
    }
}

