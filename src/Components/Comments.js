// TODO: Comments and Notes 
// ! we will begin at App.js & work through the student.js files to connect this comment.js section via the corresponding props required 

import { useState } from "react";

export default function Comments({ id, info, setInfo, student }) {
    // * states for commenter name and comment input --v
    const [commentHere, setCommentHere] = useState("")
    const [commenterName, setCommenterName] = useState("")

    // * handles the submit of comments added to the students profile via user input --v
    function handleSubmit(event) {
        event.preventDefault()


        // * iterates through student ids to return current comments w/  commenter name 
        // * & makes a new array for a new comments w/commenters name to be added to list of comments
        const commentChange = info.map((students) => {
            if (students.id === id) {
                students.notes = [...students.notes,
                { commenter: commenterName, comment: commentHere }]
            }
            // * should also return current comments and notes data that is already attached to students profile
            return students
        })
        // * sets new comment info to info and comment setters
        setInfo(commentChange) // TODO: sets comment change to info setter
        setCommentHere("") // TODO: sets new comment in ""
        setCommenterName("") // TODO: sets new commenter name in ""

        // ? State attempts done ---v
        // const [addNote, setAddNote] = useState({ // ? state for add comment section
        //     commenter: "",
        //     comment: ""
        // })

        // info.map((students) => { // ? state attempt map through
        //     if (students.id === id) {
        //         students.notes = [...students.notes,
        //         { addNote: event.target.commenterName.value && event.target.comment.value }]
        //     }

        // setAddNote(addNote) // ? setting state attempt --v
        // event.target.commenterName.value = ""
        // event.target.comment.value = ""
        // ? results do not return anything but Says, , no commenter name or comment
        // ? w/ the event it erases the input & that's it

    }

    // * returns the form for the user to input their name as commenter name and comment they chose 
    // dblock ->Use the d-inline-block class to make an element display inline blocks
    return (
        <div>
            <h2>1-on-1 Notes🖊️</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="commentName" className="dblock"><strong>Commenter Name:</strong> </label>
                <input value={commenterName} onChange={(event) => setCommenterName(event.target.value)} type="text" id="commenterName" name="commenterName" className="dblock" required></input>

                <label htmlFor="comment" className="dblock"><strong>Comment:</strong> </label>
                <input value={commentHere} onChange={(event) => setCommentHere(event.target.value)} type="text" id="comment" name="comment" className="dblock" required></input>

                <button type="submit">Add Note</button>

            </form>
            <ul>

                {student.notes.map((before, after) =>

                    <li key={after}>{before.commenter} Says, {before.comment}</li>

                )}

            </ul>

        </div>
    )
}











