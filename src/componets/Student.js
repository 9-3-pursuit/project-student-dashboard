import { v1 as generateUniqueID } from "uuid";
import { useState } from "react";
import "../styles/Student.css"

function Student ({student}) {
    const [showMore, setShowMore] = useState(false);
    const [notes, setNotes] = useState ([...student.notes]); 
    const [newNotes, setNewNotes] = useState({
        "commenter": "",
        "comment": ""
    })

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    function formatDOB (student) {
        const splitStudent = student.dob.split("/")
        return (`${months[parseInt(splitStudent[0]-1)]} ${splitStudent[1]}, ${splitStudent[2]}`);
    }

    function updateShowMore () {
        setShowMore(!showMore);
    }

    function handleTextChange (event) {
        setNewNotes({
            ...newNotes,
            [event.target.id]: event.target.value,
        })
    }

    function onSubmit (event) {
        event.preventDefault();

        if (notes.length === 0) {
            setNotes([{
                "commenter": newNotes.commenter,
                "comment": newNotes.comment
              }])
        } else {
            setNotes([...notes, {
                "commenter": newNotes.commenter,
                "comment": newNotes.comment
              }])
        }
        console.log(notes)
        setNewNotes({
            "commenter": "",
            "comment": ""
        });
    }

    return (
        <div className="studentCard" >
        <div ><img src={student.profilePhoto} alt={student.id}/></div>
            <div key={generateUniqueID()}>
                <h4>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h4>
                <p>{student.username}</p>
                <p><span>Birthday:</span> {formatDOB(student)}</p>
                <p className="showMore" onClick={() => updateShowMore()} >{showMore ? "Show Less..." : "Show More..." }</p>
            </div>
        <div>{Object.values(student.certifications).every((certificate) => certificate) && student.codewars.current.total >= 600 ? <h4>On Track to Graduate</h4>: <h4>not on Track</h4>}</div>
        {showMore ? 
                <div className="moreInfo">
                    <div className="info">
                        <div>
                            <p><strong>Codewars: </strong></p>
                            <p><span>Current Total: </span>{student.codewars.current.total}</p>
                            <p><span>Last Week: </span>{student.codewars.current.lastWeek}</p>
                            <p><span>Goal: </span>{student.codewars.goal.total}</p>
                            <p><span>Percent of Goal Achieved: </span>{(student.codewars.current.total/student.codewars.goal.total * 100).toFixed(0)}%</p>
                        </div>
                        <div>
                            <p><strong>Scores: </strong></p>
                            <p><span>Assignments: </span>{student.cohort.scores.assignments * 100}%</p>
                            <p><span>Project: </span>{student.cohort.scores.projects * 100}%</p>
                            <p><span>Assessments: </span>{student.cohort.scores.assessments * 100}%</p>
                        </div>
                        <div>
                            <p><strong>certifications: </strong></p>
                            <p><span>Resume: </span>{student.certifications.resume ? "✅" : "❌"}</p>
                            <p><span>Linkedin: </span>{student.certifications.linkedin ? "✅" : "❌"}</p>
                            <p><span>Github: </span>{student.certifications.github ? "✅" : "❌"}</p>
                            <p><span>Mock Interview: </span>{student.certifications.mockInterview ? "✅" : "❌"}</p>
                        </div>
                    </div>
                    <div className="comments">
                        <h4>1-on-1 Notes</h4>
                        <div>
                            <form className="commentForm" onSubmit={onSubmit}>
                                <label htmlFor="commenter">Commenter Name</label>
                                <input id="commenter" name="commenter" type="text" value={newNotes.commenter} onChange={handleTextChange}/>
                                <label htmlFor="comment">Comment</label>
                                <input id="comment" name="comment" type="text" value={newNotes.comment} onChange={handleTextChange}/>
                                <button>Add Notes</button>
                            </form>
                        </div>
                        <ul>
                            {/* {student.notes.map((comment, index) => {return (
                                <li key={index}>{comment.commenter} says, "{comment.comment}"</li>
                            )})} */}
                            {notes.map((comment, index) => {return (
                                <li key={index}>{comment.commenter} says, "{comment.comment}"</li>
                            )})}
                        </ul>
                    </div>
                </div> 
                : null}
    </div>
    )
}

export default Student