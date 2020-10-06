import {
    firebaseReducer,
} from "react-redux-firebase";
import {
    combineReducers
} from "redux";

import {
    userReducer
} from './user'
import {
    formReducer
} from './form'
import { appConfigReducer } from "./appConfig";

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    user: userReducer,
    form: formReducer,
    appConfig: appConfigReducer
});