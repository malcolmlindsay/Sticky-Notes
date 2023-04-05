import Note from './Note'
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, addActive }) => {
    return (
        <div className="notes-list">
            {console.log(addActive)}
            {addActive  ? <AddNote handleAddNote={handleAddNote}/> : ""}
            {notes.map((note) =>
            <Note 
                id={note.id} 
                text={note.text} 
                date={note.date}
                handleDeleteNote={handleDeleteNote}   
            />)}
        </div>
    )
}

export default NotesList;