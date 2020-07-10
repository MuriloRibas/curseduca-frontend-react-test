import styled, { keyframes } from 'styled-components'

const aniRotation = keyframes`
    10% {
        transform: rotate(20deg);
    }
    30% {
        transform: rotate(100deg);
    }
    50% {
        transform: rotate(180deg);
    }
    70% {
        transform: rotate(260deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const LoadingStyledComponent = styled.div `
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-top: 3px solid gray;
    animation: ${aniRotation} 0.5s forwards;
`;