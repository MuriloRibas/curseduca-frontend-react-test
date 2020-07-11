import React, { useEffect } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoginPage from '../Login/index';
import LandingPage from '../Landing/index';
import PrivateRoute from './PrivateRoute';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { InitialStateInterface } from '../../store/content/posts/types'
import CreatePage from '../Create/index';
export default function RouterComponent() {

    const postsStoreTyped: TypedUseSelectorHook<InitialStateInterface> = useSelector;
    const postsStore = postsStoreTyped(state => state)

    return (
        <BrowserRouter>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/landing" hasToken={postsStore.access_token !== ""} component={LandingPage} />
            <PrivateRoute exact path="/landing/create" hasToken={postsStore.access_token !== ""} component={CreatePage} />

        </BrowserRouter>
    )
}
