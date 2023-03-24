import { FETCH_SEARCH_PRODUCT_FAILURE, FETCH_SEARCH_PRODUCT_REQUEST, FETCH_SEARCH_PRODUCT_SUCCESS, SEARCH } from "./Types"

const initialState = {
    loading: false,
    data: [],
    error: '',
    filterData: []
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_SEARCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            case SEARCH:
                return {
                    filterData: action.payload
                }
            default: return state
    }
}

export default Reducer