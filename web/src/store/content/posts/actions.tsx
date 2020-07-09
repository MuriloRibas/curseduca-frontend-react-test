import thunk from 'redux-thunk';
import axios from 'axios'
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from './types';

const requester = (path: string, token?: string) => {
    return axios(`http://localhost:3000/${path}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })
}

export const getPosts = (token: string) => {
    return function(dispatch: any, getState: any) {
        return requester('posts', token)
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
        return requester('categories', token)
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