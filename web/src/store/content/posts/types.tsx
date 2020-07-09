export const GET_POSTS = '@posts/GET_POSTS'
export const GET_POSTS_SUCCESS = '@posts/GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = '@posts/GET_POSTS_FAILURE'

export const GET_CATEGORIES = '@posts/GET_CATEGORIES'
export const GET_CATEGORIES_SUCCESS = '@posts/GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = '@posts/GET_CATEGORIES_FAILURE'

export interface UseSelectorPostsInterface {
    PostsReducer: {
        posts: [GetPostsPayloadInterface]
        categories: [GetCategoriesPayloadInterface]
        hasErr: boolean
        err?: ''
    }
}

export interface InitialStateInterface {
    posts: [GetPostsPayloadInterface]
    categories: [GetCategoriesPayloadInterface]
    hasErr: boolean
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

export type PostsActionTypes = GetPostsSuccessInterface | GetPostsFailureInterface | GetCategoriesSuccessInterface | GetCategoriesFailureInterface