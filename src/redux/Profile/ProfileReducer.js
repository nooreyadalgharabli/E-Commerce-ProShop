import { FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from "./Types"

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                data:[],
                error:'',
            }
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_PROFILE_FAILURE:
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