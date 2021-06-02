import {combineReducers} from "redux";
import newsReducer from "./newsReducer";
import newsDetailReducer from "./newsDetailReducer"

const reducer = combineReducers({
  newsReducer, 
  newsDetailReducer
})

export default reducer