import React from 'react'
import { NavWrapper, TitleMain, Tag } from './styles';
import { GetCategoriesPayloadInterface } from '../../store/content/posts/types';

interface NavbarInterface {
    categories: [GetCategoriesPayloadInterface]
}

export default function NavbarComponent({ categories }: NavbarInterface) {
    return (
        <NavWrapper>
            <TitleMain>Postfinder</TitleMain>
            {
                categories !== undefined &&
                    categories.map((el, i) => 
                        <>
                            <Tag>{el.name}</Tag>
                        </>
                    )
            }
        </NavWrapper>
    )
}
