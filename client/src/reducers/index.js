/**
 * @desc:
 * on the tutorial it's singular:
 * import authReducer from "./authReducer"
 * while i have
 * import authReducer from "./authReducers
 * so this is just something to note if your coder
 * runs errors"*/

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
})