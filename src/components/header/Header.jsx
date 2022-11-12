import Button from "../utils/Button";
import Nav from "../utils/Nav";
import {
    HeaderContainer,
    Logo,
    DesktopNav,
    // MobileNav
  } from "./Header.styles";


const Header = () => {
  return (
    <HeaderContainer>
        <Logo>
            <img src={"/img/home-logo.png"} alt="" />
            <img src="/img/metabnb.png" alt="" className="meta"/>
        </Logo>
        <DesktopNav>
            <Nav type={"desktop"}/>
        </DesktopNav>
        <Button section="header" >Connect Wallet</Button>
    </HeaderContainer>
  )
}

export default Header