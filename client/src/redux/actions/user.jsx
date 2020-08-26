import { FETCH_USER } from './types'
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
