import styled from 'styled-components'

export const WrapperNav = styled.nav`
    width: 100vw;
    background-color: ${props => props.theme.primary};
    padding: 10px;
`

export const MainTitle = styled.h1`
    font-size: 24px;
    color: ${props => props.theme.textPrimary};
    text-align: center;
`