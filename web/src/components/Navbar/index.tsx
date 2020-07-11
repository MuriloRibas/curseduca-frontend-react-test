import React from 'react'
import { NavWrapper, TitleMain, Tag } from './styles';
import { GetCategoriesPayloadInterface } from '../../store/content/posts/types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

interface NavbarInterface {
    categories: [GetCategoriesPayloadInterface]
    onClickCategory: (category: string) => (dispatch: any, getState: any) => any
}

export default function NavbarComponent({ categories, onClickCategory }: NavbarInterface) {

    return (
        <NavWrapper>
            <TitleMain><Link to="/landing">Postfinder</Link></TitleMain>
            <Tag onClick={() => onClickCategory('Todos')}>Todas</Tag>
            {
                categories !== undefined &&
                    categories.map((el, i) => 
                        <>
                            <Tag onClick={() => onClickCategory(el.name)}>{el.name}</Tag>
                        </>
                    )
            }
        </NavWrapper>
    )
}
