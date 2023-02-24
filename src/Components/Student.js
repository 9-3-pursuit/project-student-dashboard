import { useState } from "react";
import "./Student.css";
export default function Student({student, date}) {
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState(student.notes);
    const [comment, setComment] = useState({
        commenter: "",
        comment: ""})

        function onTrack(student){
            const cert = student.certifications
            return (cert.resume && cert.linkedIn && cert.github && cert.mockInterview && student.codewars.current.total > 600)
        }

        function toggleShowMore(e){
            setClicked(!clicked)
        }


        function percentClassName(percent){
            return percent >= 100? "green": percent >= 50 ? "yellow" : "red"
        }

        function handleChange(e){
            const commentCopy = {...comment, [e.target.id] : e.target.value}
            setComment(commentCopy)
        }

         function handleSubmit(e){
            e.preventDefault();
            setComments([...comments, comment]);
            setComment({commenter:'', comment:''})
         }
          
         let birthday= new Intl.DateTimeFormat("en-US", {
            dateStyle: "long",
         }).format(date)


    return (
        <article className="card">
            <img src={student.profilePhoto} alt={student.names.preferredName}></img>
            <ul>
                <li key={student.id}>{student.names.preferredName} {student.names.middleName} {student.names.surname}</li>
                
                <li>{student.userName}</li>
                <li>Birthday:{birthday}</li>
                <li>{student.cohort.cohortCode}</li>
                {onTrack(student) ? <li>On track To Graduate</li> : null}
                <button className="button2" onClick={toggleShowMore} > {clicked ? "Show less..." : "Show More..."}</button>

                {clicked ? (
                    <>
                    <h3>codewars</h3>
                    <li>Current Total: {student.codewars.current.total}</li>
                    <li>Last Week : {student.codewars.current.lastWeek}</li>
                    <li>Goal : {student.codewars.goal.total}</li>
                    <li>percent of Goal Achieved : <span className={percentClassName(((student.codewars.current.total / student.codewars.goal.total)*100).toFixed())}>
                        {((student.codewars.current.total / student.codewars.goal.total)* 100 ).toFixed()}%</span></li>

                        <h3>Scores</h3>
                        <li>Assignments:{student.cohort.scores.assignments * 100}%</li>
                        <li>Projects:{student.cohort.scores.projects * 100}%</li>
                        <li>Assessments:{student.cohort.scores.assessments * 100}%</li>
                         
                         <h3>Certifications</h3>
                         <li>Resume:{student.certifications.resume ? "true" : "false"}</li>
                         <li>linkedIn:{student.certifications.linkedIn ? "true" : "false" }</li>
                         <li>mockInterview:{student.certifications.mockInterview ? "true" :"false"}</li>
                         <li>github : {student.certifications.github ? "true" : "false" }</li>
                <div className="notes">
                    <h3>1-on-1 Notes</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="comment">Comment</label>
                        <input type="text" name="comment" id="comment" value={comment.comment} onchange={handleChange}/>
                        <label htmlFor="name">Commenter Name</label>
                        <input type="text" name= "name" id="commenter" value={comment.commenter} onChange={handleChange}/>

                        <input type="submit" name="add note" id="add note"/>
                        </form>

                        {comments.length>0 ? (
                            <ul>{comments.map((comment, i) => {
                                return(
                                    <li key = {`${comment.comment} -${i}`} >{`${comment.commenter} says, ${comment.comment}`}</li>
                                )
                            })}</ul>
                        ) : null}
                    
                </div>

                    </>
                ) : null}
            </ul>
        </article>
    )
}