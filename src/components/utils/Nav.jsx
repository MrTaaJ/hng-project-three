import { Link } from 'react-router-dom'

const Nav = () => {
  return (

    <Link to = {btnDetail.link} class="button link-btn" id={btnDetail.id} key={btnDetail.id} >
        {btnDetail.text}
    </Link>
    <div>Nav</div>
  )
}

export default Nav