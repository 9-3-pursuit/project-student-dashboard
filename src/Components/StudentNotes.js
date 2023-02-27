function StudentNotes() {

    
    const [commenter, setCommenter] = useState("");
    const [comment, setComment] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`New note by from ${commenter}: ${comment}`);
      setComment("");
      setCommenter("");
    };
  
    const handleCommentChange = (e) => {
      setComment(e.target.value)
    };
    const handleCommenterChange = (e) => {
      setCommenter(e.target.value)
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h2>Add a comment</h2>
          <label htmlFor="commenter">Commenter:</label>
          <input
            value={commenter}
            onChange={() => {
              handleCommenterChange
            }}
            type="text"
            name="commenter"
            id="commenter"
          />
          <label htmlFor="comment">Comment:</label>
          <input
            value={comment}
            onChange={() => {
              handleCommentChange
            }}
            type="text"
            name="comment"
            id="comment"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
      
  }
  



  
















    return (
      <div>
        <h1>Student Dashboard</h1>
      </div>
    );
  
  
  export default StudentNotes;