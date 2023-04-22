import axios from 'axios';
// import Cookies from 'js-cookie';
import { FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS } from './Types';

export const fetchCart = (data, navigate) => {
    return (dispatch) => {
        dispatch(fetchCartRequest())
        // const token = JSON.parse(Cookies.get('profile')).token;
        const token = JSON.parse(localStorage.getItem('profile')).token;
          axios.put('https://prohop-express.herokuapp.com/api/users/profile/cart',data,{headers: {'Authorization': 'Bearer ' + token}})
          .then(response => {
            const data = response.data
            dispatch(fetchCartSuccess(data))
            // Cookies.set('Cart', JSON.stringify(data), { expires: 7 });
            // localStorage.setItem('Cart', JSON.stringify(data), { expires: 7 });
            localStorage.setItem('AddDeleteCart', JSON.stringify(data), { expires: 7 });
            navigate('/Cart')
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchCartFailure(errorMsg))
          })
    }
}

export const fetchCartRequest = () => {
    return {
        type: FETCH_CART_REQUEST,
    }
}

export const fetchCartSuccess = (data) => {
    return {
        type: FETCH_CART_SUCCESS,
        payload: data 
    }
}

export const fetchCartFailure = (error) => {
    return {
        type: FETCH_CART_FAILURE,
        payload: error
    }
}