import React from 'react'

const FooterNavLink = ( {name, dataArray} ) => {
  return (
    <>
      <h5>{name}</h5>
      <div className="foot-links">
        {dataArray.map((data) => (
          <a className="footer-link-btn" key={data.id} href={data.name}>
            {data.name}
          </a>
        ))}
      </div>
    </>
  )
}

export default FooterNavLink