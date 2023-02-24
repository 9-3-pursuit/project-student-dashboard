import React from 'react'
import Student from "./Student";
export default function StudentList({students, cohort, handleHumanReadableCohort }) {


    


    return (
        <section className="student-list">

            <h2 >{cohort.length === students.length ? "All Students" : handleHumanReadableCohort(cohort[0].cohort.cohortCode)}</h2>
            <p>
                Total Students:{cohort.length}
            </p>
            <div>
                {cohort.map((student) => {
                    return (<Student key= {`${student.id}`}
                    student={student}/>
                    )
                })}
            </div>
            
        </section>
    )
}