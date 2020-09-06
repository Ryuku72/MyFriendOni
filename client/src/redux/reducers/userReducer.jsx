import { 
    FETCH_USER, 
    ADD_POINTS, 
    ENG_UPDATE, JPN_UPDATE, HIRA_UPDATE, KATA_UPDATE,
    UPDATE_POINTS, } from '../actions/types'

const initialState = {
    username: "",
    _id: "",
    engHighScore: 0,
    hiraHighScore: 0,
    jpnHighScore: 0,
    kataHighScore: 0,
    totalScore: 0,
    lastHighScore: 0,
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
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
            };
        case UPDATE_POINTS:
            console.log(action.payload)
            return {
                ...state, 
                engHighScore: action.payload.engHighScore,
                hiraHighScore: action.payload.hiraHighScore,
                jpnHighScore: action.payload.jpnHighScore,
                kataHighScore: action.payload.kataHighScore,
                totalScore: action.payload.totalScore,
                lastHighScore: action.payload.lastHighScore,
            };
        case ADD_POINTS:
            return {
                ...state, 
                totalScore: state.totalScore + 5,
            };
        case ENG_UPDATE:
            return {
                ...state, 
                engHighScore: state.engHighScore + action.payload,
            };
        case JPN_UPDATE:
            return {
                ...state, 
                jpnHighScore: state.jpnHighScore + action.payload,
            };
        case HIRA_UPDATE:
            console.log(action.payload)
            return {
                ...state, 
                hiraHighScore: state.hiraHighScore + action.payload,
            };
        case KATA_UPDATE:
            return {
                ...state, 
                kataHighScore: state.kataHighScore + action.payload,
            };
        default:
            return state;    
    }

}