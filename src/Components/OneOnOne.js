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
        e.target.reset()
    }
   
    const addComment = (
        <li>{comments.name} says, "{comments.comment}"</li>
    )    
          
            
   
   
 
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
            <div>
                <ul>{addComment}</ul>
            </div>
        </div>
    );
  }
  