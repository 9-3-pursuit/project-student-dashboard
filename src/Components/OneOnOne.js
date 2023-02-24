import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";

export default function OneOnOne() {
    const [comments , setComments] = useState("");
    console.log(comments)
    
    function handleTextChange(e) {
        setComments({
            ...comments,
            [e.target.id]: e.target.value, 
        });
    }

    function handleClick(e){
        e.preventDefault();
        setComments();
        return (
            <div>
                <ul>
                    <li>{comments.name} says, "{comments.comment}"</li>
                </ul>
            </div>
        )
   }
   
   function addComment() {
    const createComment = {
        id: generateUniqueID(),
        name: comments.name,
        comment: comments.comment,
    }
   }
    return (
        <div>
            <h3 className="form-title">1-On-1 Notes</h3>
            <form>
                <label htmlFor="name">Commenter Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={handleTextChange}
                    value={comments.name}
                    />
                
                <lable htmlFor="comment">Comment</lable>
                <input
                    
                    type="text"
                    id="comment"
                    onChange={handleTextChange}
                    value={comments.comment}
                    />
                
                <button onClick={handleClick}>Add Note</button>
            </form>
            <div></div>
        </div>
    );
  }
  