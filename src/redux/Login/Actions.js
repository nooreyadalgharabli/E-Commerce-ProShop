import axios from 'axios';
import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from './Types';
import Cookies from 'js-cookie';

export const fetchLogin = (data, navigate) => {
    return (dispatch) => {
        dispatch(fetchLoginRequest())
          axios.post('https://prohop-express.herokuapp.com/api/users/login',data)
          .then(response => {
            const data = response.data
            dispatch(fetchLoginSuccess(data))
            Cookies.set('profile', JSON.stringify(data), { expires: 7 });
            navigate(`/profile/${data._id}`)
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchLoginFailure(errorMsg))
          })
    }
}

export const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST,
    }
}

export const fetchLoginSuccess = (data) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: data 
    }
}

export const fetchLoginFailure = (error) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}