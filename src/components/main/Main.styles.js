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

    & {
        @media screen and (max-width: 820px) {
            padding: 30px 50px;
            h1 {
                font-weight: 500;
                font-size: 36px;
            }
        }
    }

    & {
        @media screen and (max-width: 414px) {
            padding: 20px 30px;
            h1 {
                font-weight: 400;
                font-size: 36px;
                text-align: center;
            }
        }
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

    

    & {
        @media screen and (max-width: 820px) {
            padding: 30px;
            img {
                width: 50%;
            }
        }
    }

    & {
        @media screen and (max-width: 414px) {
            flex-flow: column-reverse nowrap;
            gap: 20px;

            img {
                width: 100%;
            }
        }
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

    & {
        @media screen and (max-width: 820px) {
            gap: 30px;
            width: 50%;

            h1 {
                font-weight: 500;
                font-size: 36px;
                line-height: 50px;
            }

            p {
                font-size: 16px;
                line-height: 30px;
            }
        }
    }

    & {
        @media screen and (max-width: 414px) {
            width: 100%;
            align-items: center;

            h1 {
                text-align: center;
            }

            p {
                text-align: center;
            }
        }
    }
`

export { 
    MainContainer,
    TopContainer,
    BottomContainer,
    HeadingContainer,
}