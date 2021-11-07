import "../../style/LoginScreen.css"

export default function LoginScreen() {
    return (
        <div id="login-div" className="vh-100 justify-content-center align-items-center">

            <h2 id="login-title">Login</h2>

            <form id="login-form" className="">
                <div className="form-group">
                    <input className="form-control" placeholder="Email"/>
                </div>

                <div className="form-group">
                    <input className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button id="login-button" className="form-control btn">Login</button>
                </div>
            </form>
        </div>
    )
}