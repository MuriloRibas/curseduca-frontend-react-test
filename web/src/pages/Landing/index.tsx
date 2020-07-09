import React, { useEffect } from 'react'
import NavbarComponent from '../../components/Navbar/index';
import { getPosts, getCategories } from '../../store/content/posts/actions';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { InitialStateInterface, UseSelectorPostsInterface } from '../../store/content/posts/types';
import PostsComponent from '../../components/Posts';

export default function LandingPage() {
    const postsStoreTyped: TypedUseSelectorHook<UseSelectorPostsInterface> = useSelector;
    const postsStore = postsStoreTyped(state => state.PostsReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        
        dispatch(getCategories('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldjFAY3Vyc2VkdWNhLmNvbSIsInBhc3N3b3JkIjoiZGV2MSIsImlhdCI6MTU5NDMxNjc5NywiZXhwIjoxNTk0MzQ1NTk3fQ.kVk1xV8lvbzLmCJjbA0fCJJy0bFmMRSt5XMboDbRZHM'))
        dispatch(getPosts('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldjFAY3Vyc2VkdWNhLmNvbSIsInBhc3N3b3JkIjoiZGV2MSIsImlhdCI6MTU5NDMxNjc5NywiZXhwIjoxNTk0MzQ1NTk3fQ.kVk1xV8lvbzLmCJjbA0fCJJy0bFmMRSt5XMboDbRZHM'))
    }, [])

    useEffect(() => {
        console.log('cat here: ', postsStore.categories)
    }, [postsStore.categories])

    return (
        <>
           <NavbarComponent
                categories={postsStore.categories}
           />
           <PostsComponent
                posts={postsStore.posts}
           />
        </>
    )
}
