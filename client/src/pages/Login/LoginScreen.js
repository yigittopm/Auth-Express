import "../../style/LoginScreen.css"
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginScreen() {

    const LoginSchema = Yup.object().shape({
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

    return (
        <div id="login-div" className="vh-100 justify-content-center align-items-center">

            <marquee className="row" id="login-title" behavior="alternate" direction="right" scrollAmount="10">Login</marquee>

            <form id="login-form" className="">
                <div className="login-form-gr form-group">
                    <input className="form-control" placeholder="john@example.com"/>
                </div>

                <div className="login-form-gr form-group">
                    <input type="password" className="form-control" placeholder="•••••••••"/>
                </div>
                <div className="login-form-gr form-group">
                    <button id="login-button" className="form-control btn">Login</button>
                </div>
            </form>
        </div>
    )
}