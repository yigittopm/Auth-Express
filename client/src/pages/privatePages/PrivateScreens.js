import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import ProfileScreen from "./Profile/ProfileScreen"
import PageNotFoundScreen from "../PageNotFoundScreen"

export default function PrivateScreens() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ProfileScreen} />
                <Route path="*" component={PageNotFoundScreen} />
            </Switch>
        </Router>
    )
}