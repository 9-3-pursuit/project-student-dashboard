import React, { useState } from 'react';
import './Comments.css';

const Comments = ({ student }) => {
    
    
    const [comments, setComments] = useState({
        commenter: '', comment: ''
    });
    const [submittedComment, setSubmittedComment] = useState([]);
    // const [submittedCommenter, setSubmittedCommenter] = useState([]);
  
    

    const handleTextChange = (e) => {
        
        setComments({...comments, [e.target.id]: e.target.value})
    };



const handleSubmit = (e) => {
    e.preventDefault();
    const notesObj = {
        [student.id]: student.id, 
        commenter: comments.commenter,
        comment: comments.comment
    }
    setSubmittedComment([...submittedComment, notesObj]);
    setComments({ commenter: '', comment: '' });
  };
  

  return (
    <div className='comments'>
      <form onSubmit={handleSubmit}>
        <h3>1 on 1 Notes</h3>
        <label>Commenter: </label>
              <input className='comment_box' type='text' id='commenter' value={comments.commenter} onChange={handleTextChange} />
              <br/> <br/>
        <label>Comment: </label>
        <input className='comment_box' type='text' id='comment' value={comments.comment} onChange={handleTextChange} />
        <br />
        <br/>

        <button className='add_note'type='submit'>Add Note</button>
      </form>
      
      <div>
        <ul>
                  {submittedComment.filter((note) => student.id === note[student.id]).map((comment, index) => (
              <li key={index}>{comment.commenter} says "{comment.comment}"</li>
              
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Comments;
