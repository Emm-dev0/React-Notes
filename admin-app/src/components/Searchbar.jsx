import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import './styles/Searchbar.css'

const Searchbar = () => {
  return (
    <div className='searchbar-container'>
       <RiSearchLine className='search-icon' />
        <input 
        type="search" 
        name="searchNotes" 
        id="" className='searchbar' 
        placeholder='Search notes...'
       
        />
       

    </div>
  )
}

export default Searchbar