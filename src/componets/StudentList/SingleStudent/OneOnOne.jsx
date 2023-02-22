import { useState } from "react";

export default function OneOnOne({ allNotes, setAllNotes, id }) {
  const initialState = { commenter: "", comment: "" };
  const [form, setForm] = useState(initialState);

  const studentNotes = allNotes.find((note) => note.id === id).notes;
  const { commenter, comment } = form;

  function handleSubmit(e) {
    e.preventDefault();
    const formIsValid =
      commenter.trim().length > 0 && comment.trim().length > 0;

    if (formIsValid) {
      setAllNotes(allNotes.map(addsNewNote));
      setForm(initialState);
    } else {
      alert("Please fill out the form to leave feedback");
    }
  }

  function addsNewNote(studentNote) {
    if (studentNote.id === id) {
      return {
        ...studentNote,
        notes: [
          ...studentNote.notes,
          { commenter: commenter, comment: comment },
        ],
      };
    }
    return studentNote;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  return (
    <div className="one-on-one">
      <form onSubmit={handleSubmit}>
        <h3>1-on-1</h3>
        <label htmlFor="commenter">Commenter Name</label>
        <input
          id={"commenter"}
          type={"text"}
          value={commenter}
          onChange={handleChange}
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          id={"comment"}
          rows={"4"}
          value={comment}
          onChange={handleChange}
        />
        <input type={"submit"} value={"Add Comment"} />
      </form>
      <ul>
        {studentNotes.map(({ commenter, comment }) => (
          <li key={comment}>
            {commenter} says "{comment}"
          </li>
        ))}
      </ul>
    </div>
  );
}
