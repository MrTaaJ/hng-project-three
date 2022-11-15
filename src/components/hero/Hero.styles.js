import styled from "styled-components";

const HeroContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    background: transparent;
    padding-top: 100px;

    & {
        @media screen and (max-width: 820px) {
            padding-top: 50px;
        }
    }
`

const TopContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    padding: 50px 80px;

    & {
        @media screen and (max-width: 820px) {
            padding: 20px 30px;
        }
    }

    & {
        @media screen and (max-width: 414px) {
            padding: 20px 10px;
            flex-flow: column-reverse nowrap;
            gap: 20px;
        }
    }
`

const BottomContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);

    & {
        @media screen and (max-width: 414px) {
            flex-flow: column nowrap;
            height: fit-content;
            gap: 20px;
            padding: 20px 0;
        }
    }
`


const HeadingContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 48px;
    width: 55%;

    h1 {
        font-weight: 400;
        font-size: 56px;
        line-height: 140%;
        letter-spacing: -0.02em;
        color: #434343;
        span {
            color: #A02279;
            font-weight: 700;
            line-height: 74.8px;
            letter-spacing: -2%;
        }
    }

    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 35px;
        color: #434343;
    }

    form {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        background: transparent;
        border-radius: 8px;        

        input {
            padding: 17px 26px;
            border-radius: 8px 0 0 8px;
            outline: none;
            border: none;
            width: 100%;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color: #B8B8B8;
            border: 1px solid #A3A3A3;
        }
    }


    & {
        @media screen and (max-width: 820px) {
            gap: 30px;
            
            h1 {
                font-weight: 400;
                font-size: 36px;
                line-height: 100%;
                span {
                    line-height: 60px;
                }
            }
            p {
                font-size: 20px;
                line-height: 30px;
            }

            form {       
                width: 100%; 

                input {
                    padding: 15px 10px;
                }
            }
        }
    }

    & {
        @media screen and (max-width: 414px) {
            width: 100%;
            align-items: center;
            gap: 20px;
            h1 {
                font-weight: 400;
                font-size: 24px;
                line-height: 80%;
                text-align: center;
                span {
                    line-height: 40px;
                }
            }
            p {
                font-size: 18px;
                line-height: 24px;
                text-align: center;
            }
        }
    }
`

const ImageContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 5px;
    .left-container{
        margin-top: 80px;
        display: flex;
        flex-flow: column nowrap;
        gap: 5px;

        img {
            width: 100%;
        }
    }
    .right-container{
        margin-bottom: 80px;
        display: flex;
        flex-flow: column nowrap;
        gap: 5px;

        img {
            width: 100%;
        }
    }

    & {
        @media screen and (max-width: 820px) {
            .left-container{
                margin-top: 50px;
            }
            .right-container{
                margin-bottom: 50px;
            }
        }
    }

`

export { 
    HeroContainer,
    TopContainer,
    ImageContainer,
    HeadingContainer,
    BottomContainer,
}