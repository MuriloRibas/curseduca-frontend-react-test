import styled from 'styled-components'

export const CreateWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
`;  

export const CreateForm = styled.form`
    width: 100vw;
    background-color: white;
    display: flex;
    flex-flow: column;
    padding: 25px 30px;
`;

export const CreateSelect = styled.select`
    width: 100px;
    background: none;
    border: none;
    padding: 5px;
    border-bottom: 1px solid ${props => props.theme.textSecondary};
    color: ${props => props.theme.textSecondary};

`

export const CreateQuestion = styled.span`
    color: ${props => props.theme.primary};
    font-size: 16px;
    margin-left: 25px;
    &:hover {
        cursor: pointer;
        color: grey;
    }
`