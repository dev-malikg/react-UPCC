import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
          <span className="ml-3 text-xl">GPower</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href='/'>Home</a>
          <a className="mr-5 hover:text-gray-900" href='/'>About</a>
          <a className="mr-5 hover:text-gray-900" href='/'>Info</a>
        </nav>


        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Search
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* <select data-te-select-init>
          <option value="1">One</option>
          <option value="2" disabled>Two</option>
          <option value="3" disabled>Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select> */}


      </div>
    </header>
  )
}

// galti pacadna ka lia :)
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}