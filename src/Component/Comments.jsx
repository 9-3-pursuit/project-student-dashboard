import React, { useState } from 'react';

const Comments = ({ student }) => {
    
    console.log(21312312, student)
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Commenter</label>
              <input type='text' id='commenter' value={comments.commenter} onChange={handleTextChange} />
        <label>Comment</label>
              <input type='text' id='comment' value={comments.comment} onChange={handleTextChange} />

        <button type='submit'>Add Note</button>
      </form>
      
      <div>
        <ul>
                  {submittedComment.filter((note) => student.id === note[student.id]).map((comment, index) => (
              <li key={index}>{comment.commenter} {comment.comment}</li>
              
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Comments;
