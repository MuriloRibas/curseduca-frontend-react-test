import React, { useState, useEffect, MouseEvent } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { Redirect } from 'react-router'
import { LoginWrapper, LoginForm, LoginLabel, LoginInput, LoginTitle, LoginBtn } from './styles';
import { requestLogin, logout } from '../../store/content/posts/actions';
import { InitialStateInterface } from '../../store/content/posts/types';
import { LoadingStyledComponent } from '../../components/Loading/styles';
import MessageComponent from '../../components/Message/styles';

export default function LoginPage() {
    const postsStoreTyped: TypedUseSelectorHook<InitialStateInterface> = useSelector;
    const postsStore = postsStoreTyped(state => state)

    const dispatch = useDispatch()

    const [formInputs, setFormInputs] = useState<{email: string, password: string}>({
        email: '',
        password: ''
    })

    const handleSubmit = (e: MouseEvent<HTMLButtonElement, MouseEventInit>) => {
        e.preventDefault()
        if (formInputs.email !== '' && formInputs.password !== '') {
            dispatch(requestLogin(formInputs.email, formInputs.password))
        }
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => setFormInputs({
        ...formInputs,
        [e.currentTarget.name]: e.currentTarget.value
    }) 

    useEffect(() => {
        if (postsStore.access_token !== '') {
            dispatch(logout())
        }
    }, [])

    return (
        <LoginWrapper>

            { postsStore.access_token !== "" && <Redirect to="/landing"/> }
            { postsStore.loading && <LoadingStyledComponent/> }
            { postsStore.hasErr && <MessageComponent type="error">Email ou senha incorretos.</MessageComponent> }

            <LoginForm method="POST">
                <LoginTitle>Login</LoginTitle>
                <LoginLabel htmlFor="email">Email</LoginLabel>
                <LoginInput id="email" type="text" name="email" value={formInputs.email} onChange={(e) => handleChange(e)} required/>
                <LoginLabel htmlFor="password">Senha</LoginLabel>
                <LoginInput id="password" type="password" name="password" value={formInputs.password} onChange={(e) => handleChange(e)} required/>
                <LoginBtn type="button" onClick={(e) => handleSubmit(e)}>Logar</LoginBtn>
                {/* <LoginBtn isToInvertColors>Voltar</LoginBtn> */}
            </LoginForm>
        </LoginWrapper>
    )
}
