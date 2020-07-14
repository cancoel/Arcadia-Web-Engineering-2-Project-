import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../private/PrivateRoute';
import PublicPage from '../public/PublicPage';
import PrivatePage from '../private/PrivatePage';
// import { Redirect } from 'react-router';

const Routy = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/private" component={PrivatePage}/> */}
                <PrivateRoute path="/private" component={PrivatePage}/>
                {/* <Route path="/public" component={PublicPage}/> */}
                {/* <Route path="/">
                    <Redirect to="/public"/>
                </Route> */}
                <Route path="/" component={PublicPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routy;