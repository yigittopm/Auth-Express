import { register } from "./redux/RegisterSlice"
import { Link, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect} from "react"
import "../../style/RegisterScreen.css"
import "../../style/index.css"
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterScreen() {

    const { statusCode } = useSelector((state) => state.register)

    const dispatch = useDispatch();
    const history = useHistory();
    const [formCorrect, setFormCorrect] = useState(false)

    const initialValues = {
        name:"",
        email:"",
        password:""
    }

    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
          .min(
            3, "Must be 3 or more"
          )
          .max(
            100, "Must be 100 or less"
          )
          .required("Name is required"),
        email: Yup.string()
          .email("Incorrect email.")
          .min(
            8, "Must be 8 or more"
          )
          .max(
            100, "Must be 100 or less"
          )
          .required("Email is required"),
        password: Yup.string()
          .min(
            8, "Must be 8 or more"
          )
          .max(
            100, "Must be 100 or less"
          )
          .required("Password is required"),
      });

    const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
      useFormik({
        initialValues,
        validationSchema: RegisterSchema,
        onSubmit: async (values) => {
          const { name, email, password } = values;
          await dispatch(register(values));
          await statusCode

          if(statusCode !== null && statusCode == 200) {
            history.push("/login")
          }
        },
    });

    return (
        <div id="register-div" className="vh-100 justify-content-center align-items-center">
            <marquee className="row" id="register-title" behavior="alternate" direction="right" scrollAmount="5">Register</marquee>

            <form onSubmit={handleSubmit} id="register-form" className="">
                <div className="register-form-gr form-group">
                    <input 
                        name="name" 
                        type="text" 
                        onChange={handleChange} 
                        className={` 
                          form-control   
                        ${
                          errors?.name &&
                          touched?.name &&
                          "is-invalid"
                        }`}
                        value={values.name}
                        placeholder="Name"/>
                </div>

                <div className="register-form-gr form-group">
                    <input 
                        name="email" 
                        type="email" 
                        onChange={handleChange} 
                        className={` 
                        form-control   
                      ${
                        errors?.email &&
                        touched?.email &&
                        "is-invalid"
                      }`}
                        value={values.email}
                        placeholder="Email"/>
                </div>

                <div className="register-form-gr form-group">
                    <input 
                        name="password" 
                        type="password" 
                        onChange={handleChange} 
                        className={` 
                          form-control   
                          ${
                            errors?.password &&
                            touched?.password &&
                            "is-invalid"
                          }`}
                        value={values.password}
                        placeholder="Password"/>
                </div>
                {
                  true && 
                  <div className="register-form-gr form-group">
                    <button 
                        type="submit"
                        id="register-button" 
                        className="form-control btn">Register</button>
                  </div>
                }
                
            </form>
        </div>
    )
}