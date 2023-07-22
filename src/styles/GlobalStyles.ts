import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --tile-size: 48px;
    --game-size: 960px
}
    body{
        background-color: rgb(32, 33, 35);
    }

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1.875rem;
        width: 100%;
    }
`