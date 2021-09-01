import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomeView from '../pages/HomePage'

export const DashboardRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}

            <div>
                <Switch>
                    <Route exact path="/" component={ HomeView }/>

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
