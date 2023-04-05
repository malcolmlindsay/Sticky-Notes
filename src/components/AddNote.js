import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

    const [noteText, setTextNote] = useState('');
    const characterLimit = 280;

    const [bgColor, setBgColor] = useState('var(--note-lime)')

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setTextNote(event.target.value);
        }
    };

    const saveNote = () => {
        handleAddNote(noteText, bgColor);
        setTextNote('');
    };

    function toggleColor1() {
        setBgColor('var(--note-lime)');
    }
    function toggleColor2() {
        setBgColor('var(--note-pink)');
    }
    function toggleColor3() {
        setBgColor('var(--note-royal)');
    }
    function toggleColor4() {
        setBgColor('var(--note-salmon)');
    }
    function toggleColor5() {
        setBgColor('var(--note-seafoam)');
    }
    function toggleColor6() {
        setBgColor('var(--note-yellow)');
    }

    return (
        <div style={{backgroundColor: `${bgColor}`}} id="new-note" className="note new">
            <div className="select-note-color">
                <div onClick={toggleColor1} className="color-select"></div>
                <div onClick={toggleColor2} className="color-select"></div>
                <div onClick={toggleColor3} className="color-select"></div>
                <div onClick={toggleColor4} className="color-select"></div>
                <div onClick={toggleColor5} className="color-select"></div>
                <div onClick={toggleColor6} className="color-select"></div>
            </div>
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