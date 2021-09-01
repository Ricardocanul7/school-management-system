import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import LoginPage from '../pages/auth/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {

    /* Static login value */
    /* Remove when login functionality is finished */
    const user = {
        logged : true,
    };

    return (
        <Router basename="/admin">
            <div>
                <Switch>
                    <PublicRoutes exact path="/login" component={ LoginPage } isAuthenticated={user.logged}/>
                    <PrivateRoutes path="/" component={ DashboardRoutes } isAuthenticated={user.logged}/>
                </Switch>
            </div>
        </Router>
    );
}
