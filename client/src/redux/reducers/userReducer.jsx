import { 
    FETCH_USER, 
    ADD_POINTS, MINUS_POINTS, 
    ENG_UPDATE, JPN_UPDATE, HIRA_UPDATE, KATA_UPDATE,
    UPDATE_POINTS } from '../actions/types'

const initialState = {
    username: "",
    _id: "",
    engHighScore: 0,
    hiraHighScore: 0,
    jpnHighScore: 0,
    kataHighScore: 0,
    totalScore: 0,
    lastHighScore: 0,
    sessions: [],
    createdAt: "",
    updatedAt: "",
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_USER:
            return {
                ...state, 
                username: action.payload.username,
                _id: action.payload._id,
                engHighScore: action.payload.engHighScore,
                hiraHighScore: action.payload.hiraHighScore,
                jpnHighScore: action.payload.jpnHighScore,
                kataHighScore: action.payload.kataHighScore,
                totalScore: action.payload.totalScore,
                lastHighScore: action.payload.lastHighScore,
                sessions: action.payload.sessions,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
            };
        case ADD_POINTS:
            return {
                ...state, 
                totalScore: state.totalScore + action.payload,
            };
        case MINUS_POINTS:
            return {
                ...state, 
                totalScore: state.totalScore + action.payload,
            }
        case ENG_UPDATE:
            return {
                ...state, 
                engHighScore: action.payload.engHighScore + action.payload,
            };
        case JPN_UPDATE:
            return {
                ...state, 
                jpnHighScore: action.payload.jpnHighScore + action.payload,
            };
        case HIRA_UPDATE:
            return {
                ...state, 
                hiraHighScore: action.payload.hiraHighScore + action.payload,
            };
        case KATA_UPDATE:
            return {
                ...state, 
                kataHighScore: action.payload.kataHighScore + action.payload,
            };
        case UPDATE_POINTS:
            return {
                ...state, 
                username: action.payload.username,
                _id: action.payload._id,
                engHighScore: action.payload.engHighScore,
                hiraHighScore: action.payload.hiraHighScore,
                jpnHighScore: action.payload.jpnHighScore,
                kataHighScore: action.payload.kataHighScore,
                totalScore: action.payload.totalScore,
                lastHighScore: action.payload.lastHighScore,
                sessions: action.payload.sessions,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
            };
        default:
            return state;    
    }

}