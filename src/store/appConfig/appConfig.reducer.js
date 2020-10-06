import {
    SET_IS_REDIRECT_FROM_HOME_VIEW,
    CLEAR_IS_REDIRECT_FROM_HOME_VIEW
} from "./appConfig.types";

const appConfig = {
    isRedirectFromHomeView: false
}

export const appConfigReducer = (state = appConfig, action) => {
    switch (action.type) {
        case SET_IS_REDIRECT_FROM_HOME_VIEW:
            const {
                payload: isRedirectFromHomeView
            } = action;
            return {
                ...state, isRedirectFromHomeView
            };
        case CLEAR_IS_REDIRECT_FROM_HOME_VIEW:
            return {
                ...state, isRedirectFromHomeView: false
            };
        default:
            return state;
    }
}