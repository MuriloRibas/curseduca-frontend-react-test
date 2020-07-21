import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoginPage from '../Login/index';
import LandingPage from '../Landing/index';
import PrivateRoute from './PrivateRoute';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { InitialStateInterface } from '../../store/content/posts/types'
import CreatePage from '../Create/index';
import axios from 'axios';
import { logout } from '../../store/content/posts/actions';
export default function RouterComponent() {

    const postsStoreTyped: TypedUseSelectorHook<InitialStateInterface> = useSelector;
    const postsStore = postsStoreTyped(state => state)

    const dispatch = useDispatch()

    const testToken = (token: string) => {
        return axios('http://localhost:3000/posts', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        })
            .then(res => true)
            .catch(err => false)
    }

    useEffect(() => {
        testToken(postsStore.access_token)
            .then(res => console.log('ok!'))
            .catch(err => dispatch(logout()))
    }, [])

    return (
        <BrowserRouter>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" token={postsStore.access_token} component={LandingPage} />
            <PrivateRoute path="/create" token={postsStore.access_token} component={CreatePage} />

        </BrowserRouter>
    )
}
