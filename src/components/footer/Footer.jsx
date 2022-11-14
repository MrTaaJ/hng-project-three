import { 
  FooterContainer,
  TopContainer,
  LogoSocialContainer,
  FooterLinks,
  FooterNav,
} from "./Footer.styles";
import FooterNavLink from "./FooterNavLink";

const Footer = () => {

  const footerLinksData = [
    ["Community",
      [
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
      ]
    ],
  
    ["Places",
      [
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
      ]
    ],
  
    ["About Us",
      [
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
    ],
  
  ]

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
          {footerLinksData.map((data, index) => (
            <FooterNav key={index}>
              <FooterNavLink name={data[0]} dataArray = {data[1]}/>
            </FooterNav>
          ))}
        </FooterLinks>
      </TopContainer>

      <div className="rights">
        &copy; 2022 Metabnb
      </div>
        
    </FooterContainer>
  )
}

export default Footer


