import Outputs from "./Outputs.jsx";
import InputsCountinar from "./inputs/InputsCountinar.jsx";
import "./card.css"
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { DayNow } from "../redux/Api/ageApi.js";
const Card = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const todayDate = new Date()
        dispatch(DayNow({year: todayDate.getFullYear(),month: todayDate.getMonth() + 1,day: todayDate.getDate()}))
    },[dispatch])
    return (
    <div className="card-countinar">
        <div className="card">
            {
                
            }
                <InputsCountinar/>
                <Outputs/>
    
        </div>
    </div>
);
}
 
export default Card;