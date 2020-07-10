export const GET_POSTS = '@posts/GET_POSTS'
export const GET_POSTS_SUCCESS = '@posts/GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = '@posts/GET_POSTS_FAILURE'

export const GET_CATEGORIES = '@posts/GET_CATEGORIES'
export const GET_CATEGORIES_SUCCESS = '@posts/GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = '@posts/GET_CATEGORIES_FAILURE'

export const REQUEST_LOGIN = '@posts/REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = '@posts/REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAILURE = '@posts/REQUEST_LOGIN_FAILURE'

export const LOADING = 'LOADING'

export interface UseSelectorPostsInterface {
    PostsReducer: {
        posts: [GetPostsPayloadInterface]
        categories: [GetCategoriesPayloadInterface]
        access_token: string
        hasErr: boolean
        loading: boolean
        err?: ''
    }
}

export interface InitialStateInterface {
    posts: [GetPostsPayloadInterface]
    categories: [GetCategoriesPayloadInterface]
    access_token: string
    hasErr: boolean
    loading: boolean
    err?: ''
}

export interface GetPostsPayloadInterface {
    id: number
    title: string
    text: string
    id_category: number
    id_user: number
    date: string
}

export interface GetCategoriesPayloadInterface {
    id: number
    name: string
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

export type PostsActionTypes = LoadingInterface | GetPostsSuccessInterface | GetPostsFailureInterface | GetCategoriesSuccessInterface | GetCategoriesFailureInterface | RequestLoginSuccessInterface | RequestLoginFailureInterface