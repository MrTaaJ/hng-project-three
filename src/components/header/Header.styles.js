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
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 5px;
  transform: scale(0.8);
  cursor: pointer;

  & {
    @media screen and (max-width: 768px) {
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
    font-family: 'Red Rose';
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
    @media screen and (max-width: 768px) {
    display: none;
    }
  }
`

const MobileNav = styled.nav`
  display: ${props => (props.showMobileNav ? "flex" : "none")};
  flex-flow: column nowrap;
  gap: 5px;

  .mobile-btn {
    padding: 10px;
    border-radius: 5px;
    background-color: #B8B8B8;
  }
`

export { 
    HeaderContainer,
    Logo,
    DesktopNav,
    MobileNav
}