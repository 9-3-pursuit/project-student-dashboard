import "./StudentList.css";
import OneOnOneForm from "./OneOnOneform";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { HiXMark } from "react-icons/hi2";


export default function Students({ student }) {
    const [visible, setVisibility] = useState(false);
    const [moreLess, setMoreLess] = useState("More")
    const formatBirthday = new Intl.DateTimeFormat("en", {
        dateStyle: "long"
    })

    function toggleVisibility() {
        setVisibility(!visible);
        if (moreLess === "More") {
            setMoreLess("Less")
        } else {
            setMoreLess("More")
        }
    }


    const birthday = new Date(student.dob)

    return( 
        <div className="student">
            <img src="" alt={student.names.preferredName} />
            <div className="studentMainInfo">
                <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
                <p>{student.username}</p>
                <p><span className="birthdaySpan">Birthday:</span> {formatBirthday.format(birthday)}</p>
            </div>
            <p className="showMore" onClick={toggleVisibility}>Show {moreLess}...</p>
           {visible && 
            <div className="studentDetails hide" >
                <div>
                    <h3>Codewars:</h3>
                    <p><span>Current Total:</span> {student.codewars.current.total}</p>
                    <p><span>Last Week:</span> {student.codewars.current.lastweek}</p>
                    <p><span>Goal:</span> {student.codewars.goal.total}</p>
                    <p><span>Percent of Goal Achieved:</span> {((student.codewars.current.total / student.codewars.goal.total) * 100).toFixed()}%</p>
                </div>
                <div>
                    <h3>Scores:</h3>
                    <p><span>Assignments:</span> {student.cohort.scores.assignments * 100}%</p>
                    <p><span>Projects:</span> {student.cohort.scores.projects * 100}%</p>
                    <p><span>Assessments:</span> {student.cohort.scores.assessments * 100}%</p>
                </div>
                <div>
                    <h3>Certifications:</h3> 
                    <p><span>Resume:</span> {student.certifications.resume ? <FcCheckmark className="check" /> : <HiXMark className="x" />}</p>
                    <p><span>LinkedIn:</span> {student.certifications.linkedin ? <FcCheckmark className="check" /> : <HiXMark className="x" />}</p>
                    <p><span>Mock Interview:</span> {student.certifications.github ? <FcCheckmark className="check" /> : <HiXMark className="x" />}</p>
                    <p><span>GitHub:</span> {student.certifications.mockInterview ? <FcCheckmark className="check" /> : <HiXMark className="x" />}</p>
                </div>
                <div>
                    <OneOnOneForm 
                        student={student}
                    />
                </div>
            </div>}
        </div>
        
        
    )
            
}