import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "./Types"

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
            default: return state
    }
}

export default Reducer