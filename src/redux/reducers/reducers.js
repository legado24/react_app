import { combineReducers } from "redux";
import globalReducer from "./globalReducers";

export default combineReducers({
	global: globalReducer,
 
})
