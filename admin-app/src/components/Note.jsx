import React from 'react'
import './styles/Note.css'
import { MdDeleteForever } from 'react-icons/md'
import { Link, useNavigate} from 'react-router-dom'

const Note = ({ id, title, text, date}) => {
const navigate = useNavigate() 

const handleEditNote = () => {
  navigate(`/edit-note/${id}`)
}

  return (
    
      <div className='note' onClick={handleEditNote}>
          <h3>{title.length > 20 ? (title.substr(0, 20)) + "...": title }</h3>
          <span>{text.length > 40 ? (text.substr(0, 30)) + "...": text }</span>
          <footer>
            <small>{date}</small>
            {/* <MdDeleteForever className='delete-icon'/> */}
          </footer>
      </div>
    
  )
}

export default Note