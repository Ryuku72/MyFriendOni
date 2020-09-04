import { combineReducers } from 'redux'
import quizReducer from './quizReducer'
import uiReducer from './uiReducer'
import userReducer from './userReducer'

export default combineReducers({
    quiz: quizReducer,
    ui: uiReducer,
    user: userReducer
})

