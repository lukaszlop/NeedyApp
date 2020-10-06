import {
    SET_STEP,
    SET_STEP_1_DATA,
    SET_STEP_2_DATA,
    SET_STEP_3_DATA,
    SET_STEP_4_DATA,
    SET_STEP_5_DATA
} from "./form.types";

const form = {
    activeStep: 0,
    typeOfClothes: null,
    numberOfBags: null,
    localization: null,
    needy: null,
    organization: null,
    street: null,
    city: null,
    zipCode: null,
    phoneNumber: null,
    date: null,
    time: null,
    notes: null,
}

export const formReducer = (state = form, action) => {
    switch (action.type) {
        case SET_STEP:
            const {
                payload
            } = action;
            return {
                ...state, activeStep: payload
            };
        case SET_STEP_1_DATA: {
            const {
                payload: {
                    typeOfClothes
                }
            } = action;
            return {
                ...state,
                typeOfClothes
            };
        }
        case SET_STEP_2_DATA: {
            const {
                payload: {
                    numberOfBags,
                }
            } = action;
            return {
                ...state,
                numberOfBags,
            };
        }
        case SET_STEP_3_DATA: {
            const {
                payload: {
                    localization,
                    needy,
                    organization,
                }
            } = action;
            return {
                ...state,
                localization,
                needy,
                organization,
            };
        }
        case SET_STEP_4_DATA: {
            const {
                payload: {
                    street,
                    city,
                    zipCode,
                    phoneNumber,
                    date,
                    time,
                    notes,
                }
            } = action;
            return {
                ...state,
                street,
                city,
                zipCode,
                phoneNumber,
                date,
                time,
                notes,
            };
        }
        case SET_STEP_5_DATA: {
            const {
                payload: {}
            } = action;
            return {
                state
            };
        }
        default:
            return state;
    }
}