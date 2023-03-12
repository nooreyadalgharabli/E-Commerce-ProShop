import axios from 'axios';
import { FETCH_TOPRATE_FAILURE, FETCH_TOPRATE_REQUEST, FETCH_TOPRATE_SUCCESS } from './Types';


export const fetchTopRateProduct = () => {
    return (dispatch) => {
        dispatch(fetchTopRequest())
          axios.get('https://prohop-express.herokuapp.com/api/products/top')
          .then(response => {
            const data = response.data
            dispatch(fetchTopRateSuccess(data))
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchTopRateFailure(errorMsg))
          })
    }
}

export const fetchTopRequest = () => {
    return {
        type: FETCH_TOPRATE_REQUEST
    }
}

export const fetchTopRateSuccess = (data) => {
    return {
        type: FETCH_TOPRATE_SUCCESS,
        payload: data 
    }
}

export const fetchTopRateFailure = (error) => {
    return {
        type: FETCH_TOPRATE_FAILURE,
        payload: error
    }
}