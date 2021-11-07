import { Switch, Route} from "react-router-dom";

import LoginScreen from "./pages/Login/LoginScreen"
import RegisterScreen from "./pages/Register/RegisterScreen"

import PrivateRoute from "./pages/privatePages/PrivateRoute"
import PrivateScreens from "./pages/privatePages/PrivateScreens"

function App() {
  return (
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <PrivateRoute path="/" component={PrivateScreens}/>
        </Switch>
  );
}

export default App;
