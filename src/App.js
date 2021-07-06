import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";



import "./App.css";
import "./Css/login.css";
import "./Css/nav.css";
import "./Css/home.css";

import React, { useState, useEffect } from "react"

/*material-ui*/
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";

/**Pages */

import profile from "./pages/profile";
import NotFound from "./pages/404";
import login from "./pages/login";
import register from "./pages/register";
import home from "./pages/home";






/**Route*/
import PrivateRoute from "./Routers/PrivateRoute";
import PublicRoute from "../src/Routers/PublicRoute";
/**Firebase */
import firebase from "./utils/firebase";



export default function App() {


    //loading
    const [state, setState] = useState({
        isAuth: false,
        isLoading: true,
    })



    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setState({ isAuth: true, isLoading: false })
            } else {
                //NO USER IS SIGN IN
                setState({ isAuth: false, isLoading: false })
            }
            console.log(user)
        });
    }, [])

    if (state.isLoading) {
        return <p > LOADING... < /p>
    }



            return (

            <
        ThemeProvider theme={theme} >


                <
        Router >
                    <
        Switch >
                        <
        Route path="/"
                            exact >
                            <
                                Redirect to="/login"
                                exact />
                            <
        /Route>

                            <
                                PublicRoute component={login}
                                isAuth={state.isAuth}
                                restricted={true}
                                path="/login"
                                exact />
                            <
                                PublicRoute component={register}
                                isAuth={state.isAuth}
                                restricted={true}
                                path="/register"
                                exact />

                            <
                                PrivateRoute component={home}
                                isAuth={state.isAuth}
                                path="/home"
                                exact />

                            <
                                PrivateRoute component={profile}
                                isAuth={state.isAuth}
                                path="/profile" />


                            <
                                Route component={NotFound}
                            /> <
        /Switch>


                            <
        /Router> <
        /ThemeProvider >
                            );
}