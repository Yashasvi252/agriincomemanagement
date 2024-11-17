import styled from "styled-components";

export const Mainlayout = styled.div`
   
    height: calc(100vh - 4rem); /* Subtract the height of the navigation bar from the viewport height */
    display: flex;
    flex-direction: column;
`;

export const InnerLayout = styled.div`
    padding: 2rem;
    width: 100%;
`;
