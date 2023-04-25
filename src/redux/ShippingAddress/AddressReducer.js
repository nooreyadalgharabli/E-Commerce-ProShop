import { FETCH_ADDRESS_FAILURE, FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS } from "./Types"

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true,
                data:[],
                error:''
            }
        case FETCH_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_ADDRESS_FAILURE:
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