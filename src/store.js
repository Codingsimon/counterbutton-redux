import {applyMiddleware, createStore} from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk";
import countReducer from "./reducers/countReducer";


const store = createStore(countReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;