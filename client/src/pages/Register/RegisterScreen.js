import { register } from "./redux/RegisterSlice"
import { Link, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect} from "react"
import "../../style/RegisterScreen.css"
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterScreen() {

    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = {
        name:"",
        email:"",
        password:""
    }

    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
          .min(
            2, "Must be 2 or more"
          )
          .max(
            100, "Must be 100 or less"
          )
          .required("Name is required"),
        email: Yup.string()
          .email("Incorrect email.")
          .min(
            10, "Must be 10 or more"
          )
          .max(
            100, "Must be 100 or less"
          )
          .required("Email is required"),
        password: Yup.string()
          .min(
            6, "Must be 6 or more"
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
        //const res = await dispatch(register(values));
        console.log(values)
      },
    });

    return (
        <div id="register-div" className="vh-100 justify-content-center align-items-center">
            <marquee className="row" id="register-title" behavior="alternate" direction="right" scrollAmount="5">Register</marquee>

            <form onSubmit={handleSubmit} id="register-form" className="">
                <div className="form-group">
                    <input 
                        name="name" 
                        type="text" 
                        onChange={handleChange} 
                        className="form-control" 
                        value={values.name}
                        placeholder="Name"/>
                </div>

                <div className="form-group">
                    <input 
                        name="email" 
                        type="email" 
                        onChange={handleChange} 
                        className="form-control" 
                        value={values.email}
                        placeholder="Email"/>
                </div>

                <div className="form-group">
                    <input 
                        name="password" 
                        type="password" 
                        onChange={handleChange} 
                        className="form-control" 
                        value={values.password}
                        placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button 
                        type="submit"
                        id="register-button" 
                        className="form-control btn">Register</button>
                </div>
            </form>
        </div>
    )
}