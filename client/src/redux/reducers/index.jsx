import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import wordsReducer from './wordsReducer'
import userReducer from './userReducer'

export default combineReducers({
    login: loginReducer,
    words: wordsReducer,
    user: userReducer
})

