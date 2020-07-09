import styled from 'styled-components'

export const PostsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.secondary};
`