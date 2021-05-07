import { HomePage } from "pages/HomePage";
import { Route, Switch } from "react-router-dom";

export function SwitchRoutesApp() {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    )
}