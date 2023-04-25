import axios from 'axios';
import { FETCH_ADDRESS_FAILURE, FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS } from './Types';
// import Cookies from 'js-cookie';

export const fetchShippingAddress = (data) => {
    return (dispatch) => {
        dispatch(fetchAddressRequest())
        const token = JSON.parse(localStorage.getItem('profile')).token;
          axios.post('https://prohop-express.herokuapp.com/api/orders',data,{headers: {'Authorization': 'Bearer ' + token}})
          .then(response => {
            const data = response.data
            dispatch(fetchAddressSuccess(data))
            localStorage.setItem('ShippingAddress', JSON.stringify(data), { expires: 7 });
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchAddressFailure(errorMsg))
          })
    }
}

export const fetchAddressRequest = () => {
    return {
        type: FETCH_ADDRESS_REQUEST,
    }
}

export const fetchAddressSuccess = (data) => {
    return {
        type: FETCH_ADDRESS_SUCCESS,
        payload: data 
    }
}

export const fetchAddressFailure = (error) => {
    return {
        type: FETCH_ADDRESS_FAILURE,
        payload: error
    }
}