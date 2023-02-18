export default function OneOnOne() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <h3>1-on-1</h3>
      <form>
        <label htmlFor="commentor">
          Commentor
          <input type={"text"} id={"commentor"} />
        </label>
        <label htmlFor="comment">
          Comment
          <input type={"text"} id={"comment"} />
        </label>
        <input type={"submit"} onClick={handleClick} />
      </form>
    </>
  );
}
