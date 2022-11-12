import { Link } from 'react-router-dom'

const Nav = ({ type }) => {
    const navigationButtons = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Place to stay",
            link: "/place"
        },
        {
            text: "NFTs",
            link: "/nfts"
        },
        {
            text: "Community",
            link: "/community"
        }
    ]
  return (
    <>
        {navigationButtons.map((button) => (
            <Link to = {button.link} className={`${type}-btn`} >
                {button.text}
            </Link>
        ))}
    </>
  )
}

export default Nav