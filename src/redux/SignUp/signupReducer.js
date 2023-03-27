import { FETCH_SIGNUP_FAILURE, FETCH_SIGNUP_REQUEST, FETCH_SIGNUP_SUCCESS } from "./Types"

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_SIGNUP_FAILURE:
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