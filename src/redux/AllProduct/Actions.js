import axios from 'axios';
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from './Types';


export const fetchProduct = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
          axios.get('https://prohop-express.herokuapp.com/api/products')
          .then(response => {
            const data = response.data.products
            dispatch(fetchProductSuccess(data))
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductFailure(errorMsg))
          })
    }
}

export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST,
    }
}

export const fetchProductSuccess = (data) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: data 
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}