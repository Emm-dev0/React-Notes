import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './pages/Notes'
import EditNotes from './pages/EditNotes'
import Createnote from './pages/Createnote'


import { useState } from 'react'

function App() {
   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

   useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
   }, [notes])
   console.log(notes)
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes notes={notes}/>} />
        <Route path='/edit-note/:id' element={<EditNotes notes={notes} setNotes={setNotes}/>} />
        <Route path='/create-note' element={<Createnote setNotes={setNotes}/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
