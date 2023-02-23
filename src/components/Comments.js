import { useState } from "react";

const Comments = ({id,info,setInfo,student}) => {

   const [commenter,setCommenter] = useState('')
   const [comment,setComment] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault()
        
        const InfoForComm = info.map((studComm)=> {
            if (studComm.id === id) {
                studComm.notes = [...studComm.notes,{commenter: commenter, comment: comment}]
                
            }
            return studComm
        })

        setInfo(InfoForComm)
        setCommenter("")
        setComment("") 
      }

     

      

    return (
        <div>
            <h2>1-on-1 Notes</h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="commenter" className="dblock">Commenter Name</label>
                <input value={commenter}  onChange={(e) => setCommenter(e.target.value)}  type="text" id="commenter" name="commenter" className="dblock" required></input>
                <label htmlFor="comment" className="dblock">Comment</label>
                <input type="text"  value={comment}  onChange={(e)=> setComment(e.target.value)} id="comment" name="comment" className="dblock" required></input>
               <button type="submit" >Add Note</button>
               
            </form>
             <ul>
                { student.notes.map((x,i) => <li key={i}> {x.commenter} Says, {x.comment}</li>) }
               
             </ul>

        </div>
    )
}


export default Comments
//? dblock is display block
//? created a form for the comment section
//? created a notes.map to check for a commenter and comment like Alan 
//? also created to make a comment for new users