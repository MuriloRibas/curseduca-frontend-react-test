import React from 'react'
import { PostsWrapper } from './styles';
import PostComponent from '../Post';
import { GetPostsPayloadInterface } from '../../store/content/posts/types';

interface PostsComponentInterface {
    posts: [GetPostsPayloadInterface]
}

export default function PostsComponent({ posts }: PostsComponentInterface) {
    return (
        <PostsWrapper>
            {
                posts !== undefined &&
                    posts.map((el, i) => <PostComponent key={i} infos={el} />)
            }
        </PostsWrapper>
    )
}
