import { useState } from "react";
import "../styles/Student.css"

function Student ({student, index}) {
    const [showMore, setShowMore] = useState({
        boolean: false 
    })
    const [notes, setNotes] = useState ([]); 
    const [newNotes, setNewNotes] = useState({
        "commenter": "",
        "comment": ""
    })

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    function formatDOB (student) {
        const splitStudent = student.dob.split("/")
        return (`${months[parseInt(splitStudent[0]-1)]} ${splitStudent[1]}, ${splitStudent[2]}`);
    }

    function updateShowMore (studentId) {
        if (showMore.boolean === false) {
            setShowMore({boolean: true, [studentId]: true});
        }
        if (showMore.boolean === true) {
            setShowMore({boolean: false, [studentId]: false});
        }
    }

    function handleTextChange (event) {
        setNewNotes({
            ...newNotes,
            [event.target.id]: event.target.value,
        })
    }

    function onSubmit (event, studentId) {
        event.preventDefault();
      
        const notesObj = {
            [studentId]: studentId,
            "commenter": newNotes.commenter,
            "comment": newNotes.comment
            }
        setNotes([...notes, notesObj])
        setNewNotes({
            "commenter": "",
            "comment": ""
        });
    }

    function colorCodedPercent (color) {
        if ((student.codewars.current.total/student.codewars.goal.total * 100).toFixed(0) >= 100) {
            color = "green";
        }
        if ((student.codewars.current.total/student.codewars.goal.total * 100).toFixed(0) >= 50 && (student.codewars.current.total/student.codewars.goal.total * 100).toFixed(0) < 100) {
            color = "yellow";
        }
        if ((student.codewars.current.total/student.codewars.goal.total * 100).toFixed(0) < 50) {
            color = "red";
        }
        return color;
    }

    return (
        <div key={index} className="studentCard" >
        <div ><img src={student.profilePhoto} alt={student.id}/></div>
            <div>
                <h4>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h4>
                <p>{student.username}</p>
                <p><span>Birthday:</span> {formatDOB(student)}</p>
                <button className="showMoreButton" onClick={() => updateShowMore(student.id)} >{showMore.boolean && showMore[student.id] ? "Show Less..." : "Show More..." }</button>
            </div>
        <div>{Object.values(student.certifications).every((certificate) => certificate) && student.codewars.current.total >= 600 ? <h4>On Track to Graduate</h4>: <h4>Not on Track</h4>}</div>
        {showMore.boolean && showMore[student.id]? 
                <div className="moreInfo">
                    <div className="info">
                        <div> 
                            <p><strong>Codewars: </strong></p>
                            <p><span>Current Total: </span>{student.codewars.current.total}</p>
                            <p><span>Last Week: </span>{student.codewars.current.lastWeek}</p>
                            <p><span>Goal: </span>{student.codewars.goal.total}</p>
                            <p className={colorCodedPercent()}><span>Percent of Goal Achieved: </span>{(student.codewars.current.total/student.codewars.goal.total * 100).toFixed(0)}%</p>
                        </div>
                        <div>
                            <p><strong>Scores: </strong></p>
                            <p><span>Assignments: </span>{student.cohort.scores.assignments * 100}%</p>
                            <p><span>Project: </span>{student.cohort.scores.projects * 100}%</p>
                            <p><span>Assessments: </span>{student.cohort.scores.assessments * 100}%</p>
                        </div>
                        <div>
                            <p><strong>Certifications: </strong></p>
                            <p><span>Resume: </span>{student.certifications.resume ? "✅" : "❌"}</p>
                            <p><span>Linkedin: </span>{student.certifications.linkedin ? "✅" : "❌"}</p>
                            <p><span>Github: </span>{student.certifications.github ? "✅" : "❌"}</p>
                            <p><span>Mock Interview: </span>{student.certifications.mockInterview ? "✅" : "❌"}</p>
                        </div>
                    </div>
                    <div className="comments">
                        <h3>Notes</h3>
                        <div>
                            <form className="commentForm" onSubmit={(event)=>onSubmit(event, student.id)}>
                                <label htmlFor="commenter">Commenter Name</label>
                                <input id="commenter" name="commenter" type="text" placeholder="Enter your name" value={newNotes.commenter} onChange={handleTextChange}/>
                                <label htmlFor="comment">Comment</label>
                                <input id="comment" name="comment" type="text" placeholder="Enter your comment" value={newNotes.comment} onChange={handleTextChange}/>
                                <button className="formButton" >Add Notes</button>
                            </form>
                        </div>
                        <ul>
                            {student.notes.map((comment, index) => {return (
                                <li key={index}>{comment.commenter} says, "{comment.comment}"</li>
                            )})}
                            {notes.filter((note)=> student.id === note[student.id]).map((comment, index) => {return (
                                <li key={index}>{comment.commenter} says, "{comment.comment}"</li>
                            )})}
                        </ul>
                    </div>
                </div> 
                : null}
    </div>
    )
}

export default Student;