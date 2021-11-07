//import { register } from "./redux/RegisterSlice"
//import { useState, useEffect} from "react"
import "../../style/RegisterScreen.css"

export default function RegisterScreen() {

    return (
        <div id="register-div" className="vh-100 justify-content-center align-items-center">

            <h2 id="register-title">Register</h2>

            <form id="register-form" className="">
                <div className="form-group">
                    <input className="form-control" placeholder="Name"/>
                </div>

                <div className="form-group">
                    <input className="form-control" placeholder="Email"/>
                </div>

                <div className="form-group">
                    <input className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button id="register-button" className="form-control btn">Register</button>
                </div>
            </form>
        </div>
    )
}