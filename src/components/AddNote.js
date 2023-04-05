import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

    const [noteText, setTextNote] = useState('');
    const characterLimit = 280;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setTextNote(event.target.value);
        }
    };

    const saveNote = () => {
        handleAddNote(noteText);
        setTextNote('');
    };

    return (
        <div id="new-note" className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Type your note here."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small> {characterLimit - noteText.length} </small>
                <button onClick={saveNote} className="btn-save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;