import { 
  FooterContainer,
  TopContainer,
  LogoSocialContainer,
  FooterLinks,
  FooterNav,
} from "./Footer.styles";
import FooterNavLink from "./FooterNavLink";

const Footer = () => {

  const footerLinksData = {
    community: [
      {
        id: 1,
        name: "NFT"
      },
      {
        id: 2,
        name: "Tokens"
      },
      {
        id: 3,
        name: "Landlords"
      },
      {
        id: 4,
        name: "Discord"
      },
    ],

    places: [
      {
        id: 1,
        name: "Castle"
      },
      {
        id: 2,
        name: "Farms"
      },
      {
        id: 3,
        name: "Beach"
      },
      {
        id: 4,
        name: "Learn more"
      },
    ],

    about: [
      {
        id: 1,
        name: "Road map"
      },
      {
        id: 2,
        name: "Creators"
      },
      {
        id: 3,
        name: "Career"
      },
      {
        id: 4,
        name: "Contact us"
      },
    ]
  }

  return (
    <FooterContainer>
      <TopContainer>
        <LogoSocialContainer>
          <img src={"/img/footer-logo.svg"} alt="" />
          <div className="social">
            <img src={"/img/facebook.svg"} alt="" />
            <img src={"/img/instagram.svg"} alt="" />
            <img src={"/img/twitter.svg"} alt="" />
          </div>
        </LogoSocialContainer>
        <FooterLinks>
          <FooterNav>
            <h5>Community</h5>
            <div className="foot-links">
              {footerLinksData.community.map((data) => (
                <a className="footer-link-btn" key={data.id} href={data.name}>
                  {data.name}
                </a>
              ))}
            </div>
          </FooterNav>

          <FooterNav>
            <h5>Places</h5>
            <div className="foot-links">
              {footerLinksData.places.map((data) => (
                <a className="footer-link-btn" key={data.id} href={data.name}>
                  {data.name}
                </a>
              ))}
            </div>
            {/* <FooterNavLink name="Places" dataArray = {footerLinksData.places}/> */}
          </FooterNav>

          <FooterNav>
            <FooterNavLink name="About Us" dataArray={footerLinksData.about} />
          </FooterNav>
        </FooterLinks>
      </TopContainer>

      <div className="rights">
        &copy; 2022 Metabnb
      </div>
        
    </FooterContainer>
  )
}

export default Footer