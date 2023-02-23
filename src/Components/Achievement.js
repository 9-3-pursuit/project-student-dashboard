// TODO: Achievements

// * all imports of color coded score percent for each student
import Green from "./Green.js" // ? if its >= 100
import Yellow from "./Yellow.js" // ? if its >= 50
import Red from "./Red.js" // ? if < than 50

export default function Achievement({ student }) {

    // * variable set to change the number value info according to different student beiing changed 
    let warPercent = ((student.codewars.current.total) / (student.codewars.goal.total / 100)).toFixed(0)


    // * return --v
    // * This iterates and pulls the students following information :
    // * Codewars ,Percent Goal Achieved;Scores;Certificates via data.json
    return (
        <div className="achievement">
            <div>
                <h3>Codewars:</h3>
                <ul>
                    <li key={1}><strong>Current Total ➡️</strong> {student.codewars.current.total}</li>
                    <li key={2}><strong>Last Week ➡️</strong> {student.codewars.current.lastWeek} </li>
                    <li key={3}><strong>Goal ➡️</strong> {student.codewars.goal.total}</li>
                </ul>
                <h5>
                    {(warPercent >= 100) ? (<Green warPercent={warPercent} />) :
                        ((warPercent >= 50) ? (<Yellow warPercent={warPercent} />) :
                            (<Red warPercent={warPercent} />))}
                </h5>
            </div>
            <div>
                <h3>Scores:</h3>
                <ul>
                    <li key={1}><strong>Assignements ➡️</strong> {(student.cohort.scores.assignments) * 100} %</li>
                    <li key={2}><strong>Projects ➡️</strong> {(student.cohort.scores.projects) * 100} %</li>
                    <li key={3}><strong>Assessments ➡️</strong> {(student.cohort.scores.assessments) * 100} %</li>
                </ul>
            </div>
            <div>
                <h3>Certifications:</h3>
                <ul>
                    <li key={1}><strong>Resume:</strong> {student.certifications.resume ? ("✅") : ("❌")}</li>
                    <li key={2}><strong>LinkedIn:</strong> {student.certifications.linkedin ? ("✅") : ("❌")} </li>
                    <li key={3}><strong>Mock Interview: </strong>{student.certifications.mockInterview ? ("✅") : ("❌")}</li>
                    <li key={4}><strong>GitHub:</strong> {student.certifications.github ? ("✅") : ("❌")}</li>
                </ul>
            </div>



        </div>

    )



}

