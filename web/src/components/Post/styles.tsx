import styled from 'styled-components'

export const PostWrapper = styled.div`
    width: 350px;
    background-color: white;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 50px 0px;
    border-radius: 5px;
    box-shadow: 0px 10px 50px 4px black;
`

export const PostTitle = styled.h1 `
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.primary};
    margin: 25px 0px;
`

export const PostContent = styled.p`
    font-size: 14px;
    color: ${props => props.theme.textSecondary};
` 

export const PostDate = styled.div`
    font-size: 14px;
    color: ${props => props.theme.textSecondary};
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & > * {
        margin-right: 10px;
    }
    & :last-child {
        margin-right: 15px;
    }
`

