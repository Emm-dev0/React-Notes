import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoChevronBackCircle } from 'react-icons/io5'
import '../components/styles/Note.css'
import { MdDeleteForever } from 'react-icons/md'
import useCreateDate from '../components/useCreateDate'
import { useNavigate } from 'react-router-dom'


const EditNotes = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title) 
  const [text, setText] = useState(note.text)


  console.log(note);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if(title && text) {

      const newNote = {...note, title, text, date}

      const newNotes = notes.map(item => {
        if(item.id == id) {
          item = newNote;
        }
        return item;
      })

      //adds the current notes to the array of notes
      setNotes(newNotes);

      console.log(note)
      
    }
    //redirects us back to our notes homepage
    navigate('/')
  }

  const handleDelete = () => {
    if(window.confirm('Are you sure you wish to delete')) {
       const newNotes = notes.filter(item => item.id != id);
      setNotes(newNotes);
      navigate('/')
    }
   
  }

  return (
   <div className='container'>
      <div className='header-container'>
          <div className='title'>
          <Link to={'/'}><IoChevronBackCircle className='backArrow'/></Link>
          </div>
           <button onClick={handleForm}>Save</button>
            <button className='btn-delete' onClick={handleDelete}><MdDeleteForever className='delete-icon'/></button>
        
      </div>
      <form action="" className='create-note_form' onSubmit={handleForm}>
        <input type="text" placeholder="Title" autoFocus className='title-input' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows="28" placeholder='Note details...' className='note-input' value={text} onChange={(e) => setText(e.target.value)}></textarea>
      </form>
      
    </div>
  )
}

export default EditNotes