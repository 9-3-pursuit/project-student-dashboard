
import "../styles/Students.css"
import Student from "./Student"


function Students ({updatedStudentsData}) {

    const regexp = /(.+)(\d{4})/;

    return (
        <div>
            <div>
            <h2 className="studentsTitle" >{updatedStudentsData.length === 250 ? "All Students": regexp.exec(updatedStudentsData[0].cohort.cohortCode).slice(1).join(" ")}</h2>
            <h4 className="studentsTitle">Total Students: {updatedStudentsData.length}</h4>
            {updatedStudentsData.map((student) => {return(
                <Student key={student.id} student={student}/>
            )})}
            </div>
        </div>
    )
}

export default Students

