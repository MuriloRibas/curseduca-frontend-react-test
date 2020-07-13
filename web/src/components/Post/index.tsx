import React from 'react'
import { PostWrapper, PostTitle, PostContent, PostDate, PostCategory } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { GetPostsPayloadInterface } from '../../store/content/posts/types';

interface PostComponentInterface {
    infos: GetPostsPayloadInterface
}

export default function PostComponent({ infos }: PostComponentInterface) {

    const selectCategory = (id: number) => {
        switch(id) {
            case 1:
                return 'Artigos'
            case 2:
                return 'Pensamentos'
            case 3:
                return 'Avisos'
            case 4:
                return 'Conteúdos'
        } 
    }
    const regDate = /([0-9, -]{10})+/g
    return (
        <PostWrapper>
            <PostDate>
                <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>
                <span>{infos.date?.match(regDate)}</span>
            </PostDate>
            <PostCategory>{ selectCategory(infos.id_category) }</PostCategory>
            <PostTitle>{infos.title}</PostTitle>
            <PostContent>{infos.text}</PostContent>
        </PostWrapper>
    )
}
