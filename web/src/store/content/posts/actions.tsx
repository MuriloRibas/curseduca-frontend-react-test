import thunk from 'redux-thunk';
import axios, { AxiosRequestConfig } from 'axios'
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS, LOADING, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILURE } from './types';

const requester = (path: string, method?: AxiosRequestConfig["method"], token?: string, data?: any) => {
    return axios(`http://localhost:3000/${path}`, {
        method: method !== undefined ? method : 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        data 
    })
}

export const requestLogin = (email: string, password: string) => {
    return function(dispatch: any, getState: any) {
        dispatch({ type: LOADING })
        return requester('auth/login', 'POST', undefined, {email, password})
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token)
                return dispatch({
                    type: REQUEST_LOGIN_SUCCESS,
                    access_token: res.data.access_token
                })
            })
            .catch(err => 
                dispatch({
                    type: REQUEST_LOGIN_FAILURE,
                    err
                })    
            )
    }
} 

export const getPosts = (token: string) => {
    return function(dispatch: any, getState: any) {
        return requester('posts', 'GET', token)
            .then(res => 
                dispatch({
                    type: GET_POSTS_SUCCESS,
                    payload: res.data
                })
            )
            .catch(err => 
                dispatch({
                    type: GET_POSTS_FAILURE,
                    err
                })    
            )
    }
}

export const getCategories = (token: string) => {
    return function(dispatch: any, getState: any) {
        return requester('categories', 'GET', token)
            .then(res => 
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    payload: res.data
                })
            )
            .catch(err => 
                dispatch({
                    type: GET_CATEGORIES_FAILURE,
                    err
                })
            )
    }
}