import { createSlice } from "@reduxjs/toolkit";
import { differenceInCalendarDays, differenceInDays, differenceInMonths, differenceInYears } from "date-fns";


const ageSlice = createSlice(
    {name: "age",
    initialState:{
        dayNow: null,
        ClientBirthday: null,
        calcValue: {
            day: "- -",
            month: "- -",
            year: "- -",
        }
    },
    reducers:{
        setDayNow(state,action){
            state.dayNow = action.payload
        },
        setClientBirthday(state,action) {
            state.ClientBirthday = action.payload
        },
        setCalcValue(state,action){
            function dayCalcFun(stateDay,stateClient){
                let dayCalc 
                if(stateDay.day >= stateClient.day){
                    dayCalc = Math.abs(differenceInCalendarDays(new Date(`${stateDay.year}/${stateDay.month}/${stateClient.day}`),new Date(`${stateDay.year}/${stateDay.month}/${stateDay.day}`)))
                }else if(stateClient.month != 12 && stateClient.month != 2){
                    dayCalc = Math.abs(differenceInCalendarDays(new Date(`${stateDay.year}/${stateClient?.month}/${stateClient.day}`),new Date(`${stateDay.year}/${stateClient.month + 1}/${stateDay.day}`)))
                }else{
                    dayCalc = Math.abs(differenceInCalendarDays(new Date(`${stateDay.year}/${stateClient?.month - 1}/${stateClient.day}`),new Date(`${stateDay.year}/${stateClient.month}/${stateDay.day}`)))
                }
                return dayCalc
            }
            const dataDay = dayCalcFun(state.dayNow,state.ClientBirthday)
            state.calcValue = {
                day: dataDay,
                month: differenceInMonths(new Date(), new Date(`${state.ClientBirthday?.year}/${state.ClientBirthday?.month}/${state.ClientBirthday?.day}`)) % 12,
                year: differenceInYears(new Date(), new Date(`${state.ClientBirthday?.year}/${state.ClientBirthday?.month}/${state.ClientBirthday?.day}`)),
            }
        }
    }

}
)

const ageReducer = ageSlice.reducer
const ageActions = ageSlice.actions

export {ageActions,ageReducer}

