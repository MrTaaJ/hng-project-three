import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  background: transparent;
  padding: 100px 0px 50px 0px;
`

const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  padding: 50px 80px;
`

const BottomContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: transparent;
    height: 70px;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
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
    }
    .right-container{
        margin-bottom: 80px;
        display: flex;
        flex-flow: column nowrap;
        gap: 5px;
    }

`

export { 
    HeroContainer,
    TopContainer,
    ImageContainer,
    HeadingContainer,
    BottomContainer,
}