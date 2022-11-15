import styled from "styled-components";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    & {
        @media screen and (max-width: 820px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    & {
        @media screen and (max-width: 414px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`


export default GridContainer;