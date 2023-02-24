export default function Comments({student, comments, setComments}) {

    function handleSubmit(e) {
        e.preventDefault();
        setComments((comments) => {
            return [...comments, {commenter: e.target.value.commenter, comment: e.target.value.comment}]
        })
    };

    return (
        <div className="comments">
            <h4>1-on-1 Notes</h4>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Commenter Name: <input type='text' className="name" name="commenter" id="commenter" />
                </label>
                <br/>
                <label>
                    Comment: <input type='text' className="comment" name="comment" id="comment" />
                </label>
                <br/>
                <input type='submit' value="Add Note" className="note" />
            </form>
            <div className="notes">
                <h4>Submitted Notes</h4>
                <ul>
                    {comments && comments.map(note => <li>{note.commenter} says {note.comment}</li>)}
                </ul>
            </div>
        </div>
    )
};