import { useState } from "react"
import "./StudentInfo.css"
export default function StudentInfo ({student}) {
    const scores = student.cohort.scores
    const codewars = student.codewars
    const certifications = student.certifications
    function colorTotal () {
        const total = ((codewars.current.total*100)/student.codewars.goal.total)
        let color = ""
        if (total>=100) {
            color = "green"
        }else if (total<=100&&total>=50){
            color = "orange"
        }else if (total<50){
            color = "red"
        }
        return color
    }
    return(<div className="studentInfo">
    <div className="codeWars">
        <h3>Codewars: </h3>
        <p>Current Total: {codewars.current.total}</p>
        <p>Last Week: {codewars.current.lastWeek}</p>
        <p>Goal: {codewars.goal.total}</p>
        <p>Percent of Goal Achieved: <span style={{color: colorTotal()}}>{((codewars.current.total*100)/student.codewars.goal.total).toFixed(0)}</span>%</p>
    </div>
    <div className="scores">
        <h3>Scores</h3>
        <p>Assignments: {(scores.assignments*100).toFixed(0)} %</p>
        <p>Projects: {(scores.projects*100).toFixed(0)} %</p>
        <p>Assessments: {(scores.assessments*100).toFixed(0)} %</p>
    </div>
    <div className="certifications">
        <h3>Certifications</h3>
        <p>Resume: {certifications.resume ? <span>✅</span> : <span>❌</span>} </p>
        <p>Linkedin: {certifications.linkedin? <span>✅</span> : <span>❌</span>}</p>
        <p>Mock Interview: {certifications.mockInterview? <span>✅</span> : <span>❌</span>}</p>
        <p>GitHub: {certifications.github? <span>✅</span> : <span>❌</span>}</p>
    </div>
    
    </div>)

}