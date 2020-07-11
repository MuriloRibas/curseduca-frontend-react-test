import React, { useEffect } from 'react'
import NavbarComponent from '../../components/Navbar/index';
import { getPosts, getCategories, selectFilter } from '../../store/content/posts/actions';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { InitialStateInterface } from '../../store/content/posts/types';
import PostsComponent from '../../components/Posts';

export default function LandingPage() {
    const postsStoreTyped: TypedUseSelectorHook<InitialStateInterface> = useSelector;
    const postsStore = postsStoreTyped(state => state)

    const dispatch = useDispatch()
    
    const selectCategory = (category: string) => dispatch(selectFilter(category))  

    useEffect(() => {
        dispatch(getCategories(postsStore.access_token))
        dispatch(getPosts(postsStore.access_token))
    }, [])

    useEffect(() => {
        console.log('cat here: ', postsStore.categories)
    }, [postsStore.categories])

    return (
        <>
           <NavbarComponent
                categories={postsStore.categories}
                onClickCategory={selectCategory}
           />
           <PostsComponent
                posts={postsStore.posts}
                filter={postsStore.filter}
           />
        </>
    )
}
