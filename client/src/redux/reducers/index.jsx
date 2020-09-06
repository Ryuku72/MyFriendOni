import { combineReducers } from 'redux'
import quizReducer from './quizReducer'
import uiReducer from './uiReducer'
import userReducer from './userReducer'
import studyReducer from './studyReducer'

export default combineReducers({
    quiz: quizReducer,
    study: studyReducer,
    ui: uiReducer,
    user: userReducer
})

