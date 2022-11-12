import Button from "../utils/Button";
import {
    HeroContainer,
    TopContainer,
    ImageContainer,
    HeadingContainer,
    BottomContainer,
  } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
        <TopContainer>
            <HeadingContainer>
                <h1>
                    Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
                </h1>

                <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>

                <form>
                    <input
                        type="text"
                        name="search"
                        className='search'
                        id="search"
                        placeholder="Search for location"
                    />
                    <Button section="hero" >Search</Button>
                </form>

            </HeadingContainer>
            <ImageContainer>
                <div className="left-container">
                    <img src={"/img/hero-image1.png"} alt="" />
                    <img src="/img/hero-image2.png" alt="" className="meta"/>
                </div>
                <div className="right-container">
                    <img src={"/img/hero-image3.png"} alt="" />
                    <img src="/img/hero-image4.png" alt="" className="meta"/>
                </div>
            </ImageContainer>
        </TopContainer>

        <BottomContainer>
            <img src={"/img/mbtoken-logo.svg"} alt="" />
            <img src={"/img/metamask-logo.svg"} alt="" />
            <img src={"/img/opensea-logo.svg"} alt="" />
        </BottomContainer>
        
    </HeroContainer>
  )
}

export default Hero