import axios from 'axios';
import { FETCH_SIGNUP_FAILURE, FETCH_SIGNUP_REQUEST, FETCH_SIGNUP_SUCCESS } from './Types';


export const fetchSignUp = (data) => {
    return (dispatch) => {
        dispatch(fetchSignUpRequest())
          axios.post('https://prohop-express.herokuapp.com/api/users/signup',data)
          .then(response => {
            const data = response.data
            dispatch(fetchSignUpSuccess(data))
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