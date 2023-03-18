import { combineReducers } from 'redux'
import TopRateReducer from './TopRateProduct/TopRateReducer'
import CategoriesReducer from './Categories/CategoriesReducer'
import ProductReducer from "./AllProduct/ProductReducer"
import ProductDetailsReducer from "./ProductDetails/ProductDetailsReducer"

const rootReducer = combineReducers({
    TopRate: TopRateReducer,
    Categories: CategoriesReducer,
    Products: ProductReducer,
    ProductDetails: ProductDetailsReducer
})

export default rootReducer