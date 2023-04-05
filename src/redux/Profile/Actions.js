import axios from 'axios';
// import Cookies from 'js-cookie';
import { FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from './Types';

export const fetchProfile = () => {
    return (dispatch) => {
        dispatch(fetchProfileRequest())
        // const token = JSON.parse(Cookies.get('profile')).token;
        const token = JSON.parse(localStorage.getItem('profile')).token;
        console.log(token)
          axios.get('https://prohop-express.herokuapp.com/api/users/profile',{headers: {'Authorization': 'Bearer ' + token}})
          .then(response => {
            const data = response.data
            dispatch(fetchProfileSuccess(data))
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProfileFailure(errorMsg))
          })
    }
}

export const fetchProfileRequest = () => {
    return {
        type: FETCH_PROFILE_REQUEST,
    }
}

export const fetchProfileSuccess = (data) => {
    return {
        type: FETCH_PROFILE_SUCCESS,
        payload: data 
    }
}

export const fetchProfileFailure = (error) => {
    return {
        type: FETCH_PROFILE_FAILURE,
        payload: error
    }
}