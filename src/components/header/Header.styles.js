import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 2;
  margin-top: 10px;
  background: white;
  padding: 10px 80px;

  .hamburger {
    display: none;
  }

  & {
    @media screen and (max-width: 920px) {
      margin-top: 5px;
      padding: 10px;
    }
  }

  & {
    @media screen and (max-width: 430px) {
      margin-top: 0px;
      padding: 10px;
      .hamburger {
        display: inline-block;

        .open {
          color: white;
          background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
          display: ${props => (props.showMobileNav ? "none" : "flex")};
        }

        .close {
          color: white;
          background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
          display: ${props => (props.showMobileNav ? "flex" : "none")};
        }
      }
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 5px;
  transform: scale(0.8);
  cursor: pointer;

  & {
    @media screen and (max-width: 920px) {
      transform: scale(0.7);
    }
  }

  & {
    @media screen and (max-width: 430px) {
        .meta {
            display: none;
        }
    }
  }
`

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  background: transparent;
  gap: 20px;

  .desktop-btn {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #434343;
  }

  & .desktop-btn:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  & {
    @media screen and (max-width: 920px) {
      gap: 10px;

      .desktop-btn {
        font-size: 18px;
        line-height: 20px;
      }
    }
  }

  & {
    @media screen and (max-width: 430px) {
      display: none;
    }
  }
`

const MobileNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  position: absolute;
  top: 60px;
  right: 5px;
  width: 50%;

  .mobile-btn {
    padding: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #FFFF;
    padding: 15px 30px;
    text-align: center;
  }

  & {
    @media screen and (min-width: 431px) {
      display: none;
    }
  }
`

export { 
    HeaderContainer,
    Logo,
    DesktopNav,
    MobileNav
}