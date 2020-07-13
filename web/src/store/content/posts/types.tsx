export const GET_POSTS = '@posts/GET_POSTS'
export const GET_POSTS_SUCCESS = '@posts/GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = '@posts/GET_POSTS_FAILURE'

export const GET_CATEGORIES = '@posts/GET_CATEGORIES'
export const GET_CATEGORIES_SUCCESS = '@posts/GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = '@posts/GET_CATEGORIES_FAILURE'

export const CREATE_POST = '@posts/CREATE_POST'
export const CREATE_POST_SUCCESS = '@posts/CREATE_POST_SUCCESS'
export const CREATE_POST_FAILURE = '@posts/CREATE_POST_FAILURE'

export const REQUEST_LOGIN = '@posts/REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = '@posts/REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAILURE = '@posts/REQUEST_LOGIN_FAILURE'

export const LOADING = 'LOADING'
export const LOGOUT = 'LOGOUT'
export const SELECT_FILTER = 'SELECT_FILTER'

export interface UseSelectorPostsInterface {
    PostsReducer: {
        posts: [GetPostsPayloadInterface]
        categories: [GetCategoriesPayloadInterface]
        access_token: string
        hasErr: boolean
        success: boolean
        loading: boolean
        filter: string
        err?: ''
    }
}

export interface InitialStateInterface {
    posts: [GetPostsPayloadInterface]
    categories: [GetCategoriesPayloadInterface]
    access_token: string
    hasErr: boolean
    success: boolean
    loading: boolean
    filter: string
    err?: ''
}

export interface GetPostsPayloadInterface {
    id: number
    title: string
    text: string
    id_category: number
    id_user: number
    date?: string
}

export interface GetCategoriesPayloadInterface {
    id: number
    name: string
}

export interface CreateNewPostPayloadInterface {
    id: number
    id_category: number
    text: string
    title: string
}

export interface GetPostsSuccessInterface {
    type: typeof GET_POSTS_SUCCESS,
    payload: GetPostsPayloadInterface
}
export interface GetPostsFailureInterface {
    type: typeof GET_POSTS_FAILURE,
    err?: string
}

export interface GetCategoriesSuccessInterface {
    type: typeof GET_CATEGORIES_SUCCESS,
    payload: GetCategoriesPayloadInterface
}
export interface GetCategoriesFailureInterface {
    type: typeof GET_CATEGORIES_FAILURE,
    err?: string
}

export interface RequestLoginSuccessInterface {
    type: typeof REQUEST_LOGIN_SUCCESS,
    access_token: string
}
export interface RequestLoginFailureInterface {
    type: typeof REQUEST_LOGIN_FAILURE,
    err?: string
}
export interface LoadingInterface {
    type: typeof LOADING
}
export interface LogoutInterface {
    type: typeof LOGOUT
}
export interface CreateNewPostSuccessInterface {
    type: typeof CREATE_POST_SUCCESS,
    payload: CreateNewPostPayloadInterface
}
export interface CreateNewPostFailureInterface {
    type: typeof CREATE_POST_FAILURE,
    err?: string
}
export interface SelectFilterInterface {
    type: typeof SELECT_FILTER,
    filter: string
}
export type PostsActionTypes = LoadingInterface | LogoutInterface |GetPostsSuccessInterface | GetPostsFailureInterface | GetCategoriesSuccessInterface | GetCategoriesFailureInterface | RequestLoginSuccessInterface | RequestLoginFailureInterface | CreateNewPostSuccessInterface | CreateNewPostFailureInterface | SelectFilterInterface