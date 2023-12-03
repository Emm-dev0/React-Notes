import { useState } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import Notelist from './components/Notelist'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first anote",
      date: "12/1/23"
    },
    {
      id: nanoid(),
      text: "this is my t anote",
      date: "12/1/23"
    },
    {
      id: nanoid(),
      text: "this is  first anote",
      date: "12/3/23"
    },
    {
      id: nanoid(),
      text: "this is my first anote",
      date: "12/1/23"
    },
]);


const addNote = (text) => {
  console.log(text);
} 
  return ( 
    <div className='container'>
    <Header />
    <Notelist notes={notes} handleAddNote={addNote}/>
    </div>
  )
}

export default App
