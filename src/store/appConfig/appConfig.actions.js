import {
    SET_IS_REDIRECT_FROM_HOME_VIEW,
    CLEAR_IS_REDIRECT_FROM_HOME_VIEW
} from "./appConfig.types"

export const setIsRedirectFromHomeView = isRedirect => ({
    type: SET_IS_REDIRECT_FROM_HOME_VIEW,
    payload: isRedirect
})

export const clearIsRedirectFromHomeView = () => ({
    type: CLEAR_IS_REDIRECT_FROM_HOME_VIEW,
    payload: null
})