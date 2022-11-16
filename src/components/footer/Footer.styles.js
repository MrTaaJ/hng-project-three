import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    width: 100%;
    background: #1D1D1E;
    padding: 50px 100px;

    .rights {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #F7F7F7;
        text-align: left;
    }

    & {
        @media screen and (max-width: 920px) {
            padding: 30px 50px;
        }
    }

    & {
        @media screen and (max-width: 430px) {
            align-items: center;
            padding: 20px;
            .rights {
                font-size: 14px;
                line-height: 14px;
            }
        }
    }
`

const TopContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 20%;
    width: 100%;

    & {
        @media screen and (max-width: 920px) {
            gap: 50px;
            flex-flow: column nowrap;
        }
    }
`

const LogoSocialContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    

    .social {
        display: flex;
        flex-flow: row nowrap;
        gap: 20px;
    }

    & {
        @media screen and (max-width: 920px) {
            gap: 30px;
            img {
                width: 200px;
            }

            .social {
                img {
                    width: 20px;
                }
            }
        }
    }

`

const FooterLinks = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 150px;

    & {
        @media screen and (max-width: 920px) {
            gap: 30px;
        }
    }
`

const FooterNav = styled.div`

    h5 {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 20px;
        color: #FFFFFF;
    }

    .foot-links {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        .footer-link-btn {
            font-weight: 400;
            font-size: 14px;
            line-height: 35px;
            color: #F1F3F9;
        }
    }


`

export { 
    FooterContainer,
    TopContainer,
    LogoSocialContainer,
    FooterLinks,
    FooterNav,
}