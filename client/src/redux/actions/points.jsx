import { 
    ADD_POINTS, MINUS_POINTS, UPDATE_POINTS,
    ENG_UPDATE, JPN_UPDATE, HIRA_UPDATE, KATA_UPDATE 

} from './types';
import API from '../../utils/API'

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

export const updatePoints = (request) => dispatch => {
const user = localStorage.getItem("tokens");
API.updatePoints(user, request)
.then(result => dispatch({
    type: UPDATE_POINTS,
    payload: result.data
}))
.catch((err) => console.log(err))
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
