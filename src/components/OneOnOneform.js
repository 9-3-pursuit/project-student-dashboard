import { useState } from "react";

export default function OneOnOneForm() {
    const [note, setNote] = useState({
        commenter: "",
        comment: ""
    })

    function handleAddNote(event) {
        event.preventDefault();
    }

    function handleNoteInput(event) {
        setNote({...note, [event.target.id]: event.target.value})
    }
    return(
        <div>
            <h4>1-on-1 Notes</h4>
            <form>
                <label htmlFor="commenter">Commenter Name</label>
                <input type="text" id="commenter" value={note.commenter} onChange={handleNoteInput} />
                <label htmlFor="comment">Comment</label>
                <input type="text" id="comment" value={note.comment} onChange={handleNoteInput} />
                <button onClick={handleAddNote}>Add Note</button>
            </form>
            <ul>

            </ul>
        </div>
    )
}