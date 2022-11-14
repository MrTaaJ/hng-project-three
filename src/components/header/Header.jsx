import Button from "../utils/Button";
import Nav from "../utils/Nav";
import {
  HeaderContainer,
  Logo,
  DesktopNav,
  MobileNav
} from "./Header.styles";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {

  const [toggle, setToggle] = useState(false);

  const handleBut = () => {
    setToggle( !toggle )
  }

  return (
    <HeaderContainer showMobileNav = {toggle}>
        <Logo>
            <img src={"/img/home-logo.svg"} alt="" />
            <img src="/img/metabnb.svg" alt="" className="meta"/>
        </Logo>
        <DesktopNav>
            <Nav type={"desktop"}/>
        </DesktopNav>
        <Button section="header" >Connect Wallet</Button>
        <div className="hamburger">
          <button type="button" onClick={handleBut} >
            <AiOutlineMenu className="open" size={30} />
            <AiOutlineClose className="close" size={30} />
          </button>
        </div>

        {toggle && <MobileNav><Nav type={"mobile"}/></MobileNav>}
        
    </HeaderContainer>
  )
}

export default Header