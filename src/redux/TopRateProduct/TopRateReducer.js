import { FETCH_TOPRATE_FAILURE, FETCH_TOPRATE_REQUEST, FETCH_TOPRATE_SUCCESS } from "./Types"

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_TOPRATE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_TOPRATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_TOPRATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            default: return state
    }
}

export default Reducer