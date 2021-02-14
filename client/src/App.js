import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext"
import Navbar from "./components/Navbar";

import 'materialize-css'
import Loader from "./components/Loader";

function App() {
    const {login, logout, token, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                <div className="container">
                    { isAuthenticated && <Navbar />}
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default App