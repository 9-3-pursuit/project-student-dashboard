
export default function Comments ({comments, addNewComment}) {
    function addComment(e) {
        e.preventDefault()
        const commenter = document.querySelector("input.commenter")
        const comment = document.querySelector("input.comment")
        const form = document.querySelector("form.oneOnOne")
        addNewComment([...comments, {commenter: `${commenter.value}`, comment: `${comment.value}`}])
        form.reset()
    }
    return(
        <>
        <h3>1 On 1</h3>
        <form className="oneOnOne">
            <input type="text" className="commenter"></input>
            <br />
            <input type="text" className="comment"></input>
            <br />
            <button onClick={addComment}>Add Comment</button>
            <br/>
            <ul>
            {comments.map(note => {
                    return <li><p>{note.commenter} says, "{note.comment}"</p></li>
                })}
            </ul>
        </form>
        </>
    )
}