import Green from "./Green.js"
import Yellow from "./Yellow.js"
import Red from "./Red.js"

const Achievements = ({student}) => {
   const total = ((student.codewars.current.total)/(student.codewars.goal.total/100)).toFixed(0)


   return ( 
         <div className="achievement">
            <div>
               <h3>CodeWars:</h3>
               <ul>
                  <li key={1}>Current Total: {student.codewars.current.total}</li>
                  <li key={2}>Last Week: {student.codewars.current.lastWeek}</li>
                  <li key={3}>Goal: {student.codewars.goal.total}</li>
               </ul>
               <h5>{ (total >=100) ? (<Green total={total}/>) : ( (total >= 50) ? (<Yellow total={total}/>) : (<Red total={total}/>) ) }</h5>
            </div>
            <div>
               <h3>Scores:</h3>
               <ul>
                  <li key={1}>Assignments: {(student.cohort.scores.assignments) * 100}%</li>
                  <li key={2}>Projects: {(student.cohort.scores.projects) * 100}%</li>
                  <li key={3}>Assessments: {(student.cohort.scores.assessments) * 100}%</li>
               </ul>
            </div> 
            <div>
               <h3>Certifications:</h3>
               <ul>
                  <li key={1}>Resume: {student.certifications.resume ? ("✅") : ("❌")} </li>
                  <li key={2}>LinkedIn: {student.certifications.linkedin ? ("✅") : ("❌")} </li>
                  <li key={3}>Mock Interview: {student.certifications.mockInterview ? ("✅") : ("❌")} </li>
                  <li key={4}>GitHub: {student.certifications.github ? ("✅") : ("❌")} </li>
               </ul>
            </div>
         </div>             
   )
}

export default Achievements;