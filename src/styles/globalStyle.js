import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
    }
    body{
        background: #292929;
        font-family: 'Inter', sans-serif;
    }
`
export default GlobalStyle
