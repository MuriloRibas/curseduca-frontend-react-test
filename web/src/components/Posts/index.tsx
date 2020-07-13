import React, { useState } from 'react'
import { PostsWrapper } from './styles';
import PostComponent from '../Post';
import { GetPostsPayloadInterface } from '../../store/content/posts/types';
import moment from 'moment'
interface PostsComponentInterface {
    posts: [GetPostsPayloadInterface]
    filter: string
}

export default function PostsComponent({ posts, filter }: PostsComponentInterface) {
    const [today, setToday] = useState(new Date().getTime())

    const selectCategory = (category: string) => {
        switch(category) {
            case 'Artigos':
                return 1
            case 'Pensamentos':
                return 2
            case 'Avisos':
                return 3
            case 'Conteúdos':
                return 4
            default:
                return null
        } 
    }

    const categoryFilter = filter === '' ? null : selectCategory(filter)

    return (
        <PostsWrapper>
            {
                posts !== undefined &&
                    categoryFilter === null ?
                        posts.map((el, i) => 
                            <>
                                {
                                    ( el.date === undefined || el.date === '' || moment().isAfter(el.date) ) && 
                                        <PostComponent key={i} infos={el} />
                                }
                            </>
                        )
                    :
                        posts.map((el, i) => (el.id_category === categoryFilter && (el.date === undefined || el.date === '' || moment().isSameOrAfter(el.date)) ) &&
                            <PostComponent key={i} infos={el} /> )
            }   
        </PostsWrapper>
    )
}
