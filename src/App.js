import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi'
import { nanoid } from 'nanoid';

const App = () => {

  const [addActive, setAddActive] = useState(false)
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Save this note for later",
      date: "04/04/2023"
    }
  ])

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data")
      );

    if( savedNotes ){
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes)
);
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    toggleAddActive();
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const toggleAddActive = () => {
    const addBtnEl = document.getElementsByClassName('btn-add-note')[0];
    !addActive ? addBtnEl.style.transform = "rotate(45deg)" : addBtnEl.style.transform = "rotate(0deg)";
    setAddActive(!addActive);
  };

  return (
    <div className="main-container">
      <h1>Sticky Notes</h1>
      <div className="search-add-note-container">
        <Search handleSearchNote={setSearchText}/>
        <button className="btn-add-note">
        <FiPlus onClick={toggleAddActive} size="2rem"/>
      </button>
      </div>
      <div className="app-container">
      <NotesList 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote} 
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
        addActive={addActive}/>
    </div>
    </div>
  );
}

export default App;
