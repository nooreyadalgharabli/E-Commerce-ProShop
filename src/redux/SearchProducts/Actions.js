import axios from 'axios';
import { FETCH_SEARCH_PRODUCT_FAILURE, FETCH_SEARCH_PRODUCT_REQUEST, FETCH_SEARCH_PRODUCT_SUCCESS, SEARCH } from './Types';


export const fetchSearchProduct = (filterData) => {
    return (dispatch) => {
        dispatch(fetchSearchProductRequest())
          axios.get(`https://prohop-express.herokuapp.com/api/products?keyword=${filterData}`)
          .then(response => {
            const data = response.data.products
            dispatch(fetchSearchProductSuccess(data))
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchSearchProductFailure(errorMsg))
          })
    }
}

export const fetchSearchProductRequest = () => {
    return {
        type: FETCH_SEARCH_PRODUCT_REQUEST,
    }
}

export const fetchSearchProductSuccess = (data) => {
    return {
        type: FETCH_SEARCH_PRODUCT_SUCCESS,
        payload: data 
    }
}

export const fetchSearchProductFailure = (error) => {
    return {
        type: FETCH_SEARCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const SearchRequest = (e) => {
    return {
        type: SEARCH,
        payload: e
    }
}