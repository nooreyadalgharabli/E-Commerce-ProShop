import axios from 'axios';
import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from './Types';


export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(fetchCategoriesRequest())
          axios.get('https://prohop-express.herokuapp.com/api/products/category/all')
          .then(response => {
            const data = response.data.categories
            dispatch(fetchCategoriesSuccess(data))
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchCategoriesFailure(errorMsg))
          })
    }
}

export const fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST,
    }
}

export const fetchCategoriesSuccess = (data) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: data 
    }
}

export const fetchCategoriesFailure = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}