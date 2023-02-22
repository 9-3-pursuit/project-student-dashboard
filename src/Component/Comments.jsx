import React, { useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState({
        commenter: '', comment: ''
    });
    const [submittedComment, setSubmittedComment] = useState([]);
    // const [submittedCommenter, setSubmittedCommenter] = useState([]);
  
    

    const handleTextChange = (e) => {
        
        setComments({...comments, [e.target.id]: e.target.value})
    };

//   const handleComments = (e) => {
      
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmittedComment([...submittedComment, comments],[commenter]);
    // setComments('');
    setSubmittedComment([...submittedComment, comments.commenter]);
    console.log("comments:", comments)
    
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
          {submittedComment.map((comment, index) => (
              <li key={index}>{comment.comment} {comment.commenter}</li>
              
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Comments;
