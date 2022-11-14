import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    background: transparent;
`

const TopContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 50px;
    padding: 50px 100px;
    width: 100%;
    h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        color: #000000;
    }
`

const BottomContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    padding: 100px;

    img {
        transform: scale(1);
    }
`

const HeadingContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 48px;
    width: 40%;

    h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        color: #FFFFFF;
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 35px;
        color: #FFFFFF;
    }
    .btn-main {
        width: fit-content;
    }
`

export { 
    MainContainer,
    TopContainer,
    BottomContainer,
    HeadingContainer,
}