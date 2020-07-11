import styled from 'styled-components'

export const NavWrapper = styled.nav`
    width: 100vw;
    background-color: ${props => props.theme.primary};
    padding: 10px;
`

export const TitleMain = styled.h1`
    font-size: 24px;
    color: ${props => props.theme.textPrimary};
    text-align: center;
    margin: 15px 0px;
    & > * {
        color: ${props => props.theme.textPrimary};
        text-decoration: none;
    }
`

export const Tag = styled.button`
    font-size: 16px;
    color: ${props => props.theme.textPrimary};
    border: none;
    background-color: ${props => props.theme.primary};
    border-radius: 15px;
    padding: 5px;
    box-shadow: 0px 2px 10px 2px black;
    margin: 5px;

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.textSecondary};
    }
`