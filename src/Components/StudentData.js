import { useState } from "react";
import OneOnOne from "./OneOnOne";

export default function StudentData({student , middleName , dateString}) {
    const [visible, setVisibility] = useState(false);
   
    const onTrack = ( 
        <p>On Track to Graduate</p>
            )
    
    function handleClick() {
        setVisibility(!visible);
    }
    const goalPercentage = ((student.codewars.current.total / student.codewars.goal.total) * 100).toFixed()
    const assignmentPercentage = ((student.cohort.scores.assignments) * 100).toFixed()
    const projectPercentage = ((student.cohort.scores.projects) * 100).toFixed()
    const assessmentsPercentage = ((student.cohort.scores.assessments) * 100).toFixed()
    
    return (
        <div className="student-list">
                <span className="student-info">
                    <div>
                        {/* <img alt="profile" src={student.profilePhoto}/> */}
                    </div>
                    <div>
                        <h5 className="student-name">{student.names.preferredName} {middleName}. {student.names.surname} </h5>
                        <p>{student.username}</p>
                        <p><span className="color-green">Birthday:</span> {dateString}</p>
                        <p className="show-more" onClick={handleClick}>{!visible ? "Show more..." : "Show less..."}</p>
                    </div>
                    <div className="color-green"> 
                        <div>{student.certifications.resume === true && student.certifications.linkedin === true && student.certifications.github === true && student.certifications.mockInterview === true && student.codewars.current.total > 600 ? onTrack : null}</div>
                    </div>
                </span>
                {visible && (
                <div>
                    <div className="student-data">
                        <div>
                            <h3>Codewars:</h3>
                            <p> <span className="color-green">Current Total:</span> {student.codewars.current.total}</p>
                            <p> <span className="color-green">Last Week:</span> {student.codewars.current.lastWeek}</p>
                            <p> <span className="color-green">Goal:</span> {student.codewars.goal.total}</p>
                            <p> <span className="color-green">Percent of Goal Achieved:</span> {goalPercentage}%</p>
                        </div>
                        <div>
                            <h3>Scores:</h3>
                            <p> <span className="color-green">Assignments:</span> {assignmentPercentage}%</p>
                            <p> <span className="color-green">Projects:</span> {projectPercentage}%</p>
                            <p> <span className="color-green">Assessments:</span> {assessmentsPercentage}%</p>
                        </div>
                        <div>
                            <h3>Certifications:</h3>
                            <p> <span className="color-green">Resume:</span>{student.certifications.resume ? "✅" : "❌"}</p>
                            <p> <span className="color-green">LinkedIn:</span> {student.certifications.linkedin ? "✅" : "❌"}</p>
                            <p> <span className="color-green">Mock Interview:</span> {student.certifications.github ? "✅" : "❌"}</p>
                            <p> <span className="color-green">GitHub:</span> {student.certifications.mockInterview ? "✅" : "❌"}</p>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <OneOnOne />
                    </div>
                </div>
                )} 
         </div>
  );
   
}
  