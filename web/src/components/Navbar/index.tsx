import React from 'react'
import { NavWrapper, TitleMain, Tag } from './styles';
import { GetCategoriesPayloadInterface } from '../../store/content/posts/types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

interface NavbarInterface {
    categories: [GetCategoriesPayloadInterface]
    onClickCategory: (category: string) => {}
    withCategories?: boolean
}

export default function NavbarComponent({ categories, onClickCategory, withCategories }: NavbarInterface) {

    return (
        <NavWrapper>
            <TitleMain><Link to="/landing">Postfinder</Link></TitleMain>
            {
                withCategories !== undefined && withCategories !== false &&
                    <>
                        <Tag onClick={() => onClickCategory('Todos')}>Todos</Tag>

                        {
                            categories.map((el, i) => 
                                <>
                                    <Tag onClick={() => onClickCategory(el.name)}>{el.name}</Tag>
                                </>
                            )
                        }
                    </>
            }
        </NavWrapper>
    )
}
