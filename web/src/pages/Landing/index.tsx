import React, { useEffect } from 'react'
import NavbarComponent from '../../components/Navbar/index';
import { getPosts, getCategories, selectFilter } from '../../store/content/posts/actions';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { InitialStateInterface } from '../../store/content/posts/types';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import PostsComponent from '../../components/Posts';
import ButtonFloat from '../../components/ButtonFloat';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const postsStoreTyped: TypedUseSelectorHook<InitialStateInterface> = useSelector;
    const postsStore = postsStoreTyped(state => state)

    const dispatch = useDispatch()
    
    const selectCategory = (category: string) => dispatch(selectFilter(category)) 

    const redirect = (path: string) => <Redirect to={path} />

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
                withCategories
           />
           <PostsComponent
                posts={postsStore.posts}
                filter={postsStore.filter}
           />
           <Link to="/create">
                <ButtonFloat icon={faPlusSquare} /> 
           </Link>
        </>
    )
}
