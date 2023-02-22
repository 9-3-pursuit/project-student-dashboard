import { useState } from "react";

export default function OneOnOneForm({ student }) {
    const blankNote = {
        commenter: "",
        comment: ""
    }
    const [note, setNote] = useState(blankNote)

    const [notesArray, setNotesArray] = useState([])

    function handleAddNote(event) {
        event.preventDefault();
        setNotesArray([...notesArray, note ]);
        setNote(blankNote)
    }
    

    function handleNoteInput(event) {
        setNote({...note, [event.target.id]: event.target.value})
    }
    return(
        <div>
            <h4>1-on-1 Notes</h4>
            <form onSubmit={handleAddNote}>
                <label htmlFor="commenter">Commenter Name</label>
                <input type="text" id="commenter" value={note.commenter} onChange={handleNoteInput} required />
                <label htmlFor="comment">Comment</label>
                <input type="text" id="comment" value={note.comment} onChange={handleNoteInput} required />
                <input type="submit" value={"Add Note"} />
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