import {
    firebaseReducer,
} from "react-redux-firebase";
import {
    combineReducers
} from "redux";

import {userReducer} from './user'

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    user: userReducer
});