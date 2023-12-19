import { useSelector } from "react-redux";

const Outputs = () => {
    const {calcValue} = useSelector(state => state.age)
    return (
    <ul className="output-list">
    <li className="output-item"><span>{calcValue?.year}</span>years</li>
    <li className="output-item"><span>{calcValue?.month}</span>months</li>
    <li className="output-item"><span>{calcValue?.day}</span>days</li>
    </ul>
);
}
 
export default Outputs;