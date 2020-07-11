import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'

interface MessageWrapperInterface {
    display: string
    type: string
}

export const MessageWrapper = styled.div<MessageWrapperInterface>`
    position: fixed;
    top: 0;
    margin-left: 20px;
    background-color: ${props => props.type === 'error' ? 'tomato' : 'green'};
    padding: 15px;
    z-index: 999;
    display: ${props => props.display};
    &:hover {
        cursor: pointer;
    }
`;

export const MessageMessage = styled.span`
    color: ${props => props.theme.textPrimary};
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`


export default function MessageComponent(props: any) {
    const [display, setDisplay] = useState<string>('block')
    return (
        <MessageWrapper display={display} type={props.type} onClick={(e) => setDisplay('none')}>
            <MessageMessage>
                {props.children}
            </MessageMessage>
        </MessageWrapper>
    )
}
