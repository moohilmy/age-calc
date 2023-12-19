import { ageActions } from "../slice/ageSlice.js"
export function DayNow(value){
    return async (dispatch) => {
        dispatch(ageActions.setDayNow(value))
    }
}
export function setClientBirthday(value){
    return async (dispatch) => {
        dispatch(ageActions.setClientBirthday(value))
    }
}
export function calcValueNow(){
    return async (dispatch) => {
        dispatch(ageActions.setCalcValue())
    }
}