import {useState} from 'react';
function Form({el}) {
  const [commenter, setCommenter] = useState('');
  const [comment, setComment] = useState('');
  const [newNote, setNewNote] = useState(el.notes);

  function handleSubmit(e) {
    e.preventDefault();

    addComment();
    setComment('');
    setCommenter('');
  }

  function addComment() {
    const obj = { ...newNote, commenter: commenter, comment: comment };
    newNote.push(obj);
  }
  return (
    <section className="form">
      <hr className="newForm"></hr>
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleSubmit}>
        <label id="commenter">Commenter Name:</label>
        <input
          type="text"
          id="commenter"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}>
        </input>
        <label id="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}>
        </input>
        <button type="submit" onClick={handleSubmit} className="formButton">
          Add Note
        </button>
      </form>
      <ul className="notes">
        {newNote.map((comments) => {
          return (
            <li>
              {comments.commenter} says,"{comments.comment}"
            </li>
          );
        })};
        {addComment}
      </ul>
    </section>
  );
};

export default Form;
