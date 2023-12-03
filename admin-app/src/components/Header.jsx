import React from 'react'
import Searchbar from './Searchbar'
import './styles/Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='title'>
            <h1>Notes</h1>
        </div>
        <div className='searchbar-section'>
            <Searchbar />
        </div>
    </div>
  )
}

export default Header