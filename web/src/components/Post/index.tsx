import React from 'react'
import { PostWrapper, PostTitle, PostContent, PostDate } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { GetPostsPayloadInterface } from '../../store/content/posts/types';

interface PostComponentInterface {
    infos: GetPostsPayloadInterface
}

export default function PostComponent({ infos }: PostComponentInterface) {
    return (
        <PostWrapper>
            <PostDate>
                <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>
                <span>{infos.date}</span>
            </PostDate>
            <PostTitle>{infos.title}</PostTitle>
            <PostContent>{infos.text}</PostContent>
        </PostWrapper>
    )
}
