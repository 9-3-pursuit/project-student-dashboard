import "./StudentList.css"
import { FcCheckmark } from "react-icons/fc";
import { HiXMark } from "react-icons/hi2";

export default function Students({ currentCohortArray }) {

    const formatBirthday = new Intl.DateTimeFormat("en", {
        dateStyle: "long"
    })
    
    function showMoreOrLess(event) {
        if (event.target.textContent === "Show More...") {
            event.target.textContent = "Show Less...";
            event.target.nextSibling.className = "studentDetails show";


        } else {
            event.target.textContent = "Show More...";
            event.target.nextSibling.className = "studentDetails hide";
        }
    }
   
    return(
        currentCohortArray.map(student => {
            const birthday = new Date(student.dob)
            return(
                <div key={student.id} className="student">
                    <img src="" alt={student.names.preferredName} />
                    <div className="studentMainInfo">
                        <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
                        <p>{student.username}</p>
                        <p><span className="birthdaySpan">Birthday:</span> {formatBirthday.format(birthday)}</p>
                    </div>
                    <p className="showMore" onClick={showMoreOrLess}>Show More...</p>
                
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
                    </div>
                </div>
            )
        })
    )
}