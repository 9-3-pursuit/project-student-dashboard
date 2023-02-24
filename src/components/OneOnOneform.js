import { useState } from "react";
import "./OneOnOne.css";

export default function OneOnOneForm({ student, notesArray, setNotesArray }) {
    const blankNote = {
        commenter: "",
        comment: "",
        id:""
    };
    const [note, setNote] = useState(blankNote);

    function handleAddNote(event) {
        event.preventDefault();
        setNotesArray([...notesArray, note ]);
        setNote(blankNote);
    }
    

    function handleNoteInput(event) {
        setNote({...note, [event.target.id]: event.target.value, id: student.id});
    }

    return(
        <div className="notesDiv">
            <h4>1-on-1 Notes</h4>
            <form onSubmit={handleAddNote}>
                <div className="commentDiv">
                    <label htmlFor="commenter">Commenter Name</label>
                    <input type="text" id="commenter" value={note.commenter} onChange={handleNoteInput} required />
                </div>
                <div className="commentDiv">
                    <label htmlFor="comment">Comment</label>
                    <input type="text" id="comment" value={note.comment} onChange={handleNoteInput} required />
                </div>
                <input className="submit" type="submit" value={"Add Note"} />
            </form>
            <ul>
                {student.notes.map((note, i) => {
                    return (
                        <li key={`${note.commenter}-${note.id}-${i}`}> <span>{note.commenter}</span> says, "{note.comment}"</li>
                    )
                })}

                {notesArray.filter(noteObj => noteObj.id === student.id)
                .map((noteObj, i) => {
                    
                    return (
                        <li key={`${noteObj.commenter}-${noteObj.id}-${i}`}> <span>{noteObj.commenter}</span> says, "{noteObj.comment}"</li>
                    )
                })}
            </ul>
        </div>
    )
}