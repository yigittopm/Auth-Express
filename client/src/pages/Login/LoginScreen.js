import "../../style/LoginScreen.css"
import "../../style/index.css"
import { useFormik } from "formik";
import { useHistory } from "react-router-dom"
import { login } from "./redux/LoginSlice"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup";

export default function LoginScreen() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { token } = useSelector(state => state.login)

    const initialValues = {
      email: "",
      password:""
    }

    const LoginSchema = Yup.object().shape({
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
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
          await dispatch(login(values));
          await localStorage.setItem("userToken", token)
          if(token !== null) {
            history.push("/")
          }
        },
    });

    return (
        <div id="login-div" className="vh-100 justify-content-center align-items-center">

            <marquee className="row" id="login-title" behavior="alternate" direction="right" scrollAmount="10">Login</marquee>

            <form onSubmit={handleSubmit} id="login-form" className="">
                <div className="login-form-gr form-group">
                    <input
                      name="email"
                      type="text"
                      onChange={handleChange}
                      value={values.email}
                      className={` 
                        form-control   
                        ${
                          errors?.email &&
                          touched?.email &&
                          "is-invalid"
                        }`}
                      placeholder="john@example.com"/>
                </div>

                <div className="login-form-gr form-group">
                    <input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      values={values.password} 
                      className={` 
                        form-control   
                        ${
                          errors?.password &&
                          touched?.password &&
                          "is-invalid"
                        }`}
                      placeholder="•••••••••"/>
                </div>
                <div className="login-form-gr form-group">
                    <button 
                      type="submit"
                      id="login-button" 
                      className="form-control btn">Login</button>
                </div>
            </form>
        </div>
    )
}