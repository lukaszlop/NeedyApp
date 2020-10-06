import { SET_STEP_1_DATA, SET_STEP_2_DATA, SET_STEP_3_DATA, SET_STEP_4_DATA, SET_STEP_5_DATA, SET_STEP } from "./form.types"

export const setStep = activeStep => ({
    type: SET_STEP,
    payload: activeStep
})

export const setStep1Data = (payload) => ({
    type: SET_STEP_1_DATA, 
    payload
})
export const setStep2Data = (payload) => ({
    type: SET_STEP_2_DATA, 
    payload
})
export const setStep3Data = (payload) => ({
    type: SET_STEP_3_DATA, 
    payload
})
export const setStep4Data = (payload) => ({
    type: SET_STEP_4_DATA, 
    payload
})
export const setStep5Data = (payload) => ({
    type: SET_STEP_5_DATA, 
    payload
})


