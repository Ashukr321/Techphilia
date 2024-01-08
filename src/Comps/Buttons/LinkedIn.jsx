import React from 'react'
import './LinkedInStyles.css'
import Logo from './linkedin.png'

export default function LinkedIn({profile}) {
  return (
    <a href={profile} target='_blank'>

    <div className='linkedin-base'>

        <img src={Logo} alt="" />
    </div>
    </a>
  )
}



