import "./OneOnOne.css";
export default function OneOnOne({ notes }) {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="one-on-one">
      <form>
        <h3>1-on-1</h3>
        <label htmlFor="commentor">
          Commentor Name
          <input type={"text"} id={"commentor"} />
        </label>
        <label htmlFor="comment">
          Comment
          <input type={"text"} id={"comment"} />
        </label>
        <input type={"submit"} value="Add Comment" onClick={handleClick} />
      </form>
      <ul>
        {notes.map(({ commenter, comment }) => (
          <li>
            {commenter} says "{comment}"
          </li>
        ))}
      </ul>
    </div>
  );
}
