import axios from 'axios';
import { FETCH_SIGNUP_FAILURE, FETCH_SIGNUP_REQUEST, FETCH_SIGNUP_SUCCESS } from './Types';
// import Cookies from 'js-cookie';

export const fetchSignUp = (data, navigate) => {
    return (dispatch) => {
        dispatch(fetchSignUpRequest())
          axios.post('https://prohop-express.herokuapp.com/api/users/signup',data)
          .then(response => {
            const data = response.data
            dispatch(fetchSignUpSuccess(data))
            // Cookies.set('profile', JSON.stringify(data), { expires: 7 });
            localStorage.setItem('profile', JSON.stringify(data), { expires: 7 });
            navigate(`/profile/${data._id}`)
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchSignUpFailure(errorMsg))
          })
    }
}

export const fetchSignUpRequest = () => {
    return {
        type: FETCH_SIGNUP_REQUEST,
    }
}

export const fetchSignUpSuccess = (data) => {
    return {
        type: FETCH_SIGNUP_SUCCESS,
        payload: data 
    }
}

export const fetchSignUpFailure = (error) => {
    return {
        type: FETCH_SIGNUP_FAILURE,
        payload: error
    }
}