import { FETCH_USER, ADD_POINTS, MINUS_POINTS, UPDATE_POINTS, ENG_UPDATE, JPN_UPDATE, HIRA_UPDATE, KATA_UPDATE, SESSIONS_UPDATE, SESSIONS_NO_UPDATE } from './types'
import API from '../../utils/API'

export const fetchUser = () => dispatch => {
     const user = localStorage.getItem("tokens");
        API.getUser(user)
        .then(result => dispatch({
            type: FETCH_USER,
            payload: result.data
        }))
        .catch((err) => console.log(err))
}

export const increment = nr => {
    return {
        type: ADD_POINTS,
        payload: nr
    }
}

export const decrement = nr => {
    return {
        type: MINUS_POINTS,
        payload: nr
    }
}

export const engPoints = nr => {
    return {
        type: ENG_UPDATE,
        payload: nr
    }
}

export const jpnPoints = nr => {
    return {
        type: JPN_UPDATE,
        payload: nr
    }
}

export const hiraPoints = nr => {
    return {
        type: HIRA_UPDATE,
        payload: nr
    }
}

export const kataPoints = nr => {
    return {
        type: KATA_UPDATE,
        payload: nr
    }
}

export const updatePoints = (request) => dispatch => {
    const user = localStorage.getItem("tokens");
    API.updatePoints(user, request)
    .then(result =>  {
        // console.log(result); 
        dispatch({
        type: UPDATE_POINTS,
        payload: result.data
    })
})
    .catch((err) => console.log(err))
}

export const sessionUpdate = (request) => dispatch => {
    const user = localStorage.getItem("tokens");
    // console.log(request)
    API.updateSessions(user, request)
    .then(result => {
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