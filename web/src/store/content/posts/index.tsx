import { GET_POSTS, GET_CATEGORIES, InitialStateInterface, PostsActionTypes, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from './types';

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
    hasErr: false,
    err: ''
}

export default function PostsReducer(state = initialState, action: PostsActionTypes) {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                hasErr: true,
                err: action.err
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                hasErr: true,
                err: action.err
            }

        default:
            return state;
    }
}