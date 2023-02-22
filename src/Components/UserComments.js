import { useState } from "react";

const Comments = ({id, info, setInfo, student}) => {
 
    const [commenter, setCommenter] = useState('')
    const [comment, setComment] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        
        const newInfo = info.map((stud)=> {
            if (stud.id === id) {
                stud.notes = [...stud.notes,{commenter: commenter, comment: comment}]
                
            }
            return stud
        })

        setInfo(newInfo)
        setCommenter('')
        setComment('')              
    }

    return (
        <section>
            <h2> 1-on-1 Notes 🗒 </h2> 
            <form onSubmit={handleSubmit}>
                <label htmlFor="commenter" className="displayComment">Commenter Name</label>
                <input value={commenter}  onChange={(e) => setCommenter(e.target.value)}  type="text" id="commenter" name="commenter" className="displayComment" required></input>
                <label htmlFor="comment" className="displayComment">Comment</label>
                <input value={comment}  onChange={(e)=> setComment(e.target.value)} type="text" id="comment" name="comment" className="displayComment" required></input>
                <button type="submit">Add Note</button>               
            </form>
            <ul>
                {student.notes.map((x, i) => <li key={i}> {x.commenter} says, {x.comment}</li>)}              
            </ul>
        </section>
    )
}

export default Comments;