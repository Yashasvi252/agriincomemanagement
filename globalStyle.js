import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-color: #BC6C25;
        --primary-color2: #DDA15E;
        --primary-color3: #FEFAE0;
        --color-green: #28368;
        --color-grey: #606C38;
        --color-accent: #F9A74B;
        --color-delete: #FF0000;
    }

    body {
        font-family: 'Mukta', sans-serif;
        font-size: 16px; /* Set a base font size */
        color: #000000a3;
    }

    /* Adjust font size for smaller screens */
    @media (max-width: 768px) {
        body {
            font-size: 14px;
        }
    }
`;


export const Mainlayout = styled.div`
    padding: 1rem; /* Adjust padding for smaller screens */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const InnerLayout = styled.div`
    padding: 1rem; /* Adjust padding for smaller screens */
    width: 100%;
    flex: 1;
    overflow-y: auto; /* Add overflow-y: auto to allow vertical scrolling if needed */
`;

