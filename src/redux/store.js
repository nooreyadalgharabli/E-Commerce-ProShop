import { applyMiddleware, createStore } from 'redux';            // npm install redux react-redux
import thunk from 'redux-thunk'                                  // npm install axios redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';  // npm install --save redux-devtools-extension
import logger from 'redux-logger'                                // npm install redux-logger
import rootReducer from "./rootReducer";


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store