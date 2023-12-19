import {configureStore} from "@reduxjs/toolkit"

import { ageReducer } from "./slice/ageSlice.js";


const store = configureStore({
    reducer: {
        age: ageReducer
    }
})


export default store