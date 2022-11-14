import { Link } from 'react-router-dom'

const Nav = ({ type }) => {
    const navigationButtons = [
        {
            text: "Home",
            link: "/",
            id:1
        },
        {
            text: "Place to stay",
            link: "/place",
            id:2
        },
        {
            text: "NFTs",
            link: "/nfts",
            id:3
        },
        {
            text: "Community",
            link: "/community",
            id:4
        }
    ]
  return (
    <>
        {navigationButtons.map((button) => (
            <Link to = {button.link} className={`${type}-btn`} key = {button.id}>
                {button.text}
            </Link>
        ))}
    </>
  )
}

export default Nav