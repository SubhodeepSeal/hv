import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import { check } from "../login";
import Logout from "./Logout";
import UserSettings from "./UserSettings";
import NotFound from "./NotFound"
import "./theme.css"
import LiveSearchFilter from "./LiveSearchFilter";
import "./App.css";


function App() {
    const clearCacheData = () => {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });
        alert('Complete Cache Cleared')
      };
    let [login, setLogin] = React.useState(false);

    check().then(r => {
        setLogin(r)
    })

    return (
        <React.Fragment>
            
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {login ? <MainPage /> : <Home />}
                    </Route>
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/settings" exact component={UserSettings} />
                    <Route path="/search"  exact component={LiveSearchFilter}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
