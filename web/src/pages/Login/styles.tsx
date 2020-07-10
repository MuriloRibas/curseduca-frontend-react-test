import styled from 'styled-components'

interface LoginBtnInterface {
    isToInvertColors?: boolean
}

export const LoginWrapper = styled.div`
    background-color: ${props => props.theme.primary};
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginTitle = styled.h1`
    font-size: 24px;
    color: ${props => props.theme.primary};
`;

export const LoginForm = styled.form `
    background-color: white;
    color: black;
    width: 100vw;
    padding: 25px 50px;
    display: flex;
    flex-direction: column;
`;

export const LoginLabel = styled.label`
    color: ${props => props.theme.textSecondary};
    font-size: 12px;
    margin-top: 35px;

`

export const LoginInput = styled.input`
    border: none;
    transition: background-color 0.25s;
    border-bottom: 1px solid grey;
    padding: 5px;
    
`

export const LoginBtn = styled.button<LoginBtnInterface>`
    transition: background-color 0.5s;
    background-color: ${props => props.isToInvertColors ? 'white' : props.theme.primary};
    color: ${props => props.isToInvertColors ? props.theme.primary : 'white'};
    font-size: 18px;
    border: none;
    padding: 5px;
    width: 100px;
    margin-top: 40px;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.secondary};
    }
`