import { useState } from "react";
import StudentDetails from "./StudentDetails";
import StudentNotes from "./StudentNotes";
// import { formattedCohort } from "../helper/formats"




export default function StudentLists({ studentData, currentCohort }) {


    const formattedCohort = (cohortCode) => {
        if (cohortCode !== "AllStudents") {
            const cohortSplit = cohortCode.split("")
            cohortSplit.splice(-4, 0, " ")
            const cohortJoin = cohortSplit.join("")
            return cohortJoin
        } else {
            return cohortCode
        }

    }
    const fullName = (student) => {

        return (student.names.preferredName + " " + student.names.middleName + " " + student.names.surname)

    }
    let allStudents = []
    if (currentCohort === "AllStudents") {
        allStudents = studentData
    } else {
        allStudents = studentData.filter((student) => student.cohort.cohortCode === currentCohort)
    }


    return (
        <div>
            <h1> All Student { }
                <p>Total Student: {allStudents.length}</p>
            </h1>

            <article>
                <ul>
                    {allStudents.map((student) =>


                        <li className="studentdetail">
                            <img className="studentpicture" src={student.profilePhoto} alt="Profile ">
                            </img>
                            <p>{fullName(student)}</p>
                            <p>Birthday: {student.dob}</p>
                            <div className="graduate">
                                {(student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview & (student.codewars.current.total > 600)) ?
                                    (<h4>On Track To Graduate</h4>) : (null)
                                }
                            </div>
                        </li>)}
                    <StudentDetails />
                    <StudentNotes />

                </ul>
            </article>
        </div >
    );
}
