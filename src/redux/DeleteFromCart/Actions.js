import axios from 'axios';
import { FETCH_DELETE_CART_FAILURE, FETCH_DELETE_CART_REQUEST, FETCH_DELETE_CART_SUCCESS } from './Types';

export const fetchDeleteCart = (id, navigate) => {
    return (dispatch) => {
        dispatch(fetchDeleteCartRequest())
        const token = JSON.parse(localStorage.getItem('profile')).token;
          axios.delete(`https://prohop-express.herokuapp.com/api/users/profile/cart?productId=${id}`,{headers: {'Authorization': 'Bearer ' + token}})
          .then(response => {
            const data = response.data
            dispatch(fetchDeleteCartSuccess(data))
            localStorage.setItem('AddDeleteCart', JSON.stringify(data), { expires: 7 });
            navigate('/Cart')
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchDeleteCartFailure(errorMsg))
          })
    }
}

export const fetchDeleteCartRequest = () => {
    return {
        type: FETCH_DELETE_CART_REQUEST,
    }
}

export const fetchDeleteCartSuccess = (data) => {
    return {
        type: FETCH_DELETE_CART_SUCCESS,
        payload: data 
    }
}

export const fetchDeleteCartFailure = (error) => {
    return {
        type: FETCH_DELETE_CART_FAILURE,
        payload: error
    }
}