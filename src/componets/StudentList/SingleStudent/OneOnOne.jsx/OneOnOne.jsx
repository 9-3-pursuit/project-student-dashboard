import "./OneOnOne.css";
import { useState } from "react";

export default function OneOnOne({ notes }) {
  const initialState = { commentor: "", comment: "" };
  const [form, setForm] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${form.commentor} says "${form.comment}"`);
    setForm({ ...initialState });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  console.log(form.commentor);
  return (
    <div className="one-on-one">
      <form onSubmit={handleSubmit}>
        <h3>1-on-1</h3>
        <label htmlFor="commentor">Commentor Name</label>
        <input
          id={"commentor"}
          type={"text"}
          value={form.commentor}
          onChange={handleChange}
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          id={"comment"}
          row={"10"}
          value={form.comment}
          onChange={handleChange}
        />
        <input type={"submit"} value={"Add Comment"} />
      </form>
      <ul>
        {notes.map(({ commenter, comment }) => (
          <li key={comment}>
            {commenter} says "{comment}"
          </li>
        ))}
      </ul>
    </div>
  );
}
