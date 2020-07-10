import { GET_POSTS, GET_CATEGORIES, InitialStateInterface, PostsActionTypes, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE, REQUEST_LOGIN_FAILURE, REQUEST_LOGIN_SUCCESS, LOADING } from './types';

const initialState: InitialStateInterface = {
    posts: [
        {
            id: 0,
            title: '',
            text: '',
            id_category: 0,
            id_user: 0,
            date: ''
        }
    ],
    categories: [
        {
            id: 0,
            name: ''
        }
    ],
    access_token: '',
    hasErr: false,
    loading: false,
    err: ''
}

export default function PostsReducer(state = initialState, action: PostsActionTypes) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasErr: false,
                posts: action.payload
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                hasErr: true,
                loading: false,
                err: action.err
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                hasErr: false,
                categories: action.payload
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                hasErr: true,
                loading: false,
                err: action.err
            }
        case REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                access_token: action.access_token,
                loading: false,
                hasErr: false,
            }
        case REQUEST_LOGIN_FAILURE:
            return {
                ...state,
                hasErr: true,
                loading: false,
                err: action.err
            }
        default:
            return state;
    }
}