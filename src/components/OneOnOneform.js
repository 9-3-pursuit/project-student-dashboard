import { useState } from "react";
import "./OneOnOne.css";

export default function OneOnOneForm({ student }) {
    const blankNote = {
        commenter: "",
        comment: ""
    }
    const [note, setNote] = useState(blankNote)

    const [notesArray, setNotesArray] = useState([student.notes[0]])

    function handleAddNote(event) {
        event.preventDefault();
        setNotesArray([...notesArray, note ]);
        setNote(blankNote)
    }
    console.log(student.notes[0].commenter)

    function handleNoteInput(event) {
        setNote({...note, [event.target.id]: event.target.value})
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
                {notesArray.map((noteObj, i) => {
                    return (
                        <li key={`${noteObj.commenter}${i}`}> <span>{noteObj.commenter}</span> says, "{noteObj.comment}"</li>
                    )
                })}
            </ul>
        </div>
    )
}