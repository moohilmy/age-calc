import { useDispatch, useSelector } from "react-redux"
import arrIcon from "../../assets/icon-arrow.svg"
import { setClientBirthday,calcValueNow } from "../../redux/Api/ageApi"
import { Formik } from "formik"
const InputsCountinar = () => {
    const dispatch = useDispatch()
    const {dayNow} = useSelector(state => state.age)
    
    return (
<Formik
        initialValues={{ day: "",month: "",year: "" }}
        validate={values => {
            const errors = {};
            if (!values.day) {
                errors.day = 'This required is field';
            } else if (values.day > 31) {
                errors.day = 'Must be a valid day';
            }
            if (!values.month) {
                errors.month = 'This required is field';
            } else if (values.month > 12) {
                errors.month = 'Must be a valid month';
            }
            else if(values.month == 2 && values.day > 29){
                errors.day = 'Must be a valid day';
            }
            else if(values.month % 2 == 0 && values.month !== 8 && values.month !== 10 && values.month !== 12 && values.day > 30){
                errors.day = 'Must be a valid day';
            }
            if (!values.year) {
                errors.year = 'This required is field';
            } else if (values.year > dayNow?.year) {
                errors.year = 'Must be in the past';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            dispatch(setClientBirthday(values))
            dispatch(calcValueNow())
            setSubmitting(false)
            
        }}
        validateOnBlur={false}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit} className="form-inpt">
            <div className="inpts-countinar">
                <div className={`int ${errors.day && touched.day && 'int-error' }`} >
                    <label htmlFor="day">day</label>
                    <input 
                    type="number"
                    min={1}
                    name="day"
                    placeholder="DD"
                    id='day'
                    onChange={handleChange}
                    value={values.day}
                    />
                    <span className="err-msg">{errors.day && touched.day && errors.day}</span>
                </div>
                <div className={`int ${errors.month && touched.month && 'int-error'} `}>
                        <label htmlFor="month">month</label>
                        <input
                        type="number"
                        min={1}
                        name="month"
                        placeholder="MM"
                        id="month"
                        onChange={handleChange}
                        value={values.month}
                        />
                        <span className="err-msg">{errors.month && touched.month && errors.month}</span>
                </div>
                <div className={`int ${errors.year && touched.year && 'int-error'}`}>
                    <label htmlFor="year">year</label>
                    <input
                    type="number"
                    min="1900"
                    name="year"
                    placeholder="YYYY"
                    id="year"
                    onChange={handleChange}
                    value={values.year}
                    />
                    <span className="err-msg">{errors.year && touched.year && errors.year}</span>
                </div>
                </div>
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    <img src={arrIcon} alt="" />
                </button>
            </form>
        )}
        </Formik>
        
);
    }

 
export default InputsCountinar;