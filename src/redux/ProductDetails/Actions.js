import axios from 'axios';
import { FETCH_PRODUCT_DETAILS_FAILURE, FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS } from './Types';


export const fetchProductDetails = (id) => {
    return (dispatch) => {
        dispatch(fetchProductDetailsRequest())
          axios.get(`https://prohop-express.herokuapp.com/api/products/${id}`)
          .then(response => {
            const data = response.data
            dispatch(fetchProductDetailsSuccess(data))
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductDetailsFailure(errorMsg))
          })
    }
}

export const fetchProductDetailsRequest = () => {
    return {
        type: FETCH_PRODUCT_DETAILS_REQUEST,
    }
}

export const fetchProductDetailsSuccess = (data) => {
    return {
        type: FETCH_PRODUCT_DETAILS_SUCCESS,
        payload: data 
    }
}

export const fetchProductDetailsFailure = (error) => {
    return {
        type: FETCH_PRODUCT_DETAILS_FAILURE,
        payload: error
    }
}