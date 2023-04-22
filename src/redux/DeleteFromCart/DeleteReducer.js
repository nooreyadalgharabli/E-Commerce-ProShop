import { FETCH_DELETE_CART_FAILURE, FETCH_DELETE_CART_REQUEST, FETCH_DELETE_CART_SUCCESS } from "./Types"

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_DELETE_CART_REQUEST:
            return {
                ...state,
                loading: true,
                data:[],
                error:'',
            }
        case FETCH_DELETE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_DELETE_CART_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        
            default: return state
    }
}

export default Reducer