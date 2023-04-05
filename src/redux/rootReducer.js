import { combineReducers } from 'redux'
import TopRateReducer from './TopRateProduct/TopRateReducer'
import CategoriesReducer from './Categories/CategoriesReducer'
import ProductReducer from "./AllProduct/ProductReducer"
import ProductDetailsReducer from "./ProductDetails/ProductDetailsReducer"
import SearchReducer from "./SearchProducts/SearchReducer"
import signupReducer from "./SignUp/signupReducer"
import loginReducer from "./Login/LoginReducer"
import ProfileReducer from "./Profile/ProfileReducer"
import CartReducer from "./AddToCart/CartReducer"

const rootReducer = combineReducers({
    TopRate: TopRateReducer,
    Categories: CategoriesReducer,
    Products: ProductReducer,
    ProductDetails: ProductDetailsReducer,
    SearchProducts: SearchReducer,
    SignUp: signupReducer,
    Login: loginReducer,
    Profile: ProfileReducer,
    Cart: CartReducer

})

export default rootReducer