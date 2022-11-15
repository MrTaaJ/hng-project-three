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
import { Link } from 'react-router-dom'


const Header = ({ handlePop }) => {

  const [toggle, setToggle] = useState(false);
  const [togglePop, setTogglePop] = useState();

  const handleBut = () => {
    setToggle( !toggle )
  }

  const handlePopBut = () => {
    setTogglePop( true )
    handlePop(togglePop)
  }

  return (
    <HeaderContainer showMobileNav = {toggle}>

        <Link to = "/">
          <Logo>
              <img src={"/img/home-logo.svg"} alt="" />
              <img src="/img/metabnb.svg" alt="" className="meta"/>
          </Logo>
        </Link>

        <DesktopNav>
            <Nav type={"desktop"}/>
        </DesktopNav>

        <div onClick={ handlePopBut }>
          <Button section="header" >Connect Wallet</Button>
        </div>

        <div className="hamburger">
          <button type="button" onClick={handleBut} >
            <AiOutlineMenu className="open" size={30} />
            <AiOutlineClose className="close" size={30} />
          </button>
        </div>

        {toggle && <MobileNav onClick={handleBut}><Nav type={"mobile"} /></MobileNav>}
        
    </HeaderContainer>
  )
}

export default Header