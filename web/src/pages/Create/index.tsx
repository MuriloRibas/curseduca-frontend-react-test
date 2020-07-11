import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { CreateWrapper, CreateForm, CreateSelect } from './styles';
import { LoginLabel, LoginInput, LoginBtn } from '../Login/styles';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { InitialStateInterface } from '../../store/content/posts/types';
import { createNewPost, selectFilter } from '../../store/content/posts/actions';
import { LoadingStyledComponent } from '../../components/Loading/styles';
import NavbarComponent from '../../components/Navbar/index';
import MessageComponent from '../../components/Message/styles';

export default function CreatePage() {
    const postsStoreTyped: TypedUseSelectorHook<InitialStateInterface> = useSelector;
    const postsStore = postsStoreTyped(state => state)

    const dispatch = useDispatch();

    const selectCategory = (category: string) => dispatch(selectFilter(category))  

    const [formInputs, setFormInputs] = useState<{title: string, category: number, text: string}>({
        title: '',
        category: 0,
        text: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        return dispatch(createNewPost(formInputs.title, formInputs.category, formInputs.text, postsStore.access_token));
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => setFormInputs({
        ...formInputs,
        [e.currentTarget.name]: e.currentTarget.value
    })

    return (
        <>
            <NavbarComponent
                categories={postsStore.categories}
                onClickCategory={selectCategory}
            />
            <CreateWrapper>
                { postsStore.hasErr && <MessageComponent type="error">Ocorreu um erro ao criar sua postagem. Tente novamente</MessageComponent> }
                { postsStore.success && <MessageComponent type="success">Postagem criada.</MessageComponent> }
                { postsStore.loading && <LoadingStyledComponent/> }
                <CreateForm method="POST" onSubmit={(e) => handleSubmit(e)}>
                    <LoginLabel htmlFor="title">Título</LoginLabel>
                    <LoginInput type="text" id="title" value={formInputs.title} name="title" onChange={(e) => handleChange(e)}/>

                    <LoginLabel htmlFor="categories">Categoria</LoginLabel>
                    <CreateSelect name="category" id="categories" onChange={(e) => handleChange(e)}>
                        <option value={1}>Artigos</option>
                        <option value={2}>Pensamentos</option>
                        <option value={3}>Avisos</option>
                        <option value={4}>Conteúdos</option>
                    </CreateSelect>

                    <LoginLabel htmlFor="text">Conteúdo</LoginLabel>
                    <textarea rows={10} id="text" value={formInputs.text} name="text" onChange={(e) => handleChange(e)}/>
                    <LoginBtn type="submit">Criar Post</LoginBtn>
                </CreateForm>
            </CreateWrapper>
        </>
    )
}
