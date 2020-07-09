import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    /* @font-face {
        font-family:'Nova Mono' ;
        src: url('/assets/fonts/NovaMono-Regular.ttf');
    } */
    body {
        padding: 0;
        margin: 0;
        overflow-x: auto;
        /* font-family: 'Nova Mono', monospace; */
    }
    * {
        padding: 0;
        margin: 0;
        /* font-family: 'Nova Mono', monospace; */
        transition: background-color 0.25s;   
    }
`