import Green from "./Green.js"
import Yellow from "./Yellow.js"
import Red from "./Red.js"

const Achievement = ({student}) => {
   const total = ((student.codewars.current.total)/(student.codewars.goal.total/100)).toFixed(0)


   

   return ( <div className="achievement">
             <div>
                <h3>Codewars:</h3>
                <ul>
                    <li key={1}>Current Total: {student.codewars.current.total}</li>
                    <li key={2}>Last Week: {student.codewars.current.lastWeek}</li>
                    <li key={3}>Goal: {student.codewars.goal.total}</li>
                 </ul>
                 <h5> { (total >=100) ? (<Green total={total}/>) : ( (total >= 50) ? (<Yellow total={total}/>) : (<Red total={total}/>) ) }</h5>
             </div>
             <div>
                <h3>Scores</h3>
                <ul>
                    <li key={1}>Assignements: {(student.cohort.scores.assignments) * 100} %</li>
                    <li key={2}>Projects: {(student.cohort.scores.projects) * 100} %</li>
                    <li key={3}>Assessments: {(student.cohort.scores.assessments) * 100} %</li>
                 </ul>
             </div> 
             <div>
                <h3>Certifications</h3>
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

export default Achievement

// ? imported the color components in order to highlight the corresponding colors to the total score.
//? achivements component for certificates, scores and codewars 
//? if total is 100% or above for total scores it will display green, if above 50% it is above yellow and when below 50% display red
//? toFixed for the decimal placement