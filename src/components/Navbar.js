import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className='nav_bar'>
        <li className='bars' ><span className='pagename'>{props.title}</span></li>
        <li className='bars' > home </li>
        <li className='bars' > about </li>
        <li className='bars' > blogs </li>
    </nav>
  )
}

// galti pacadna ka lia :)
Navbar.propTypes = { 
    title: PropTypes.string.isRequired, 
    about: PropTypes.string
}