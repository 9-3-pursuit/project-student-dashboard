import { v1 as generateUniqueID } from "uuid";

function Students ({updatedStudentsData, studentsData}) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function formatDOB (student) {
        const splitStudent = student.dob.split("/")
        return (`${months[parseInt(splitStudent[0]-1)]} ${splitStudent[1]}, ${splitStudent[2]}`);
    }


    const regexp = /(.+)(\d{4})/;

    return (
        <div>
            {updatedStudentsData.length === 0? 
            <div>
                <h3>All Students</h3>
            <h4>Total Students: {studentsData.length}</h4>
            {studentsData.map((student) => {return(
                <div className="studentCard" key={generateUniqueID()}>
                    <div><img src={student.profilePhoto} alt={student.id}/></div>
                    <div>
                        <h4>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h4>
                        <p>{student.username}</p>
                        <p><span>Birthday:</span> {formatDOB(student)}</p>
                        <a href="here">Show More...</a>
                    </div>
                    <div>{Object.values(student.certifications).every((certificate) => certificate === true) && student.codewars.current.total >= 600 ? <h4>On Track to Graduate</h4>: <h4>not on Track</h4>}</div>
                </div>
                    )})}
            </div>
            :<div>
            <h3>{updatedStudentsData.length === 250 ? "All Students": regexp.exec(updatedStudentsData[0].cohort.cohortCode).slice(1).join(" ")}</h3>
        <h4>Total Students: {updatedStudentsData.length}</h4>
        {updatedStudentsData.map((student) => {return(
            <div className="studentCard" key={generateUniqueID()}>
                <img src={student.profilePhoto} alt={student.id}/>
                <h4>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h4>
                <p>{student.username}</p>
                <p><span>Birthday:</span> {formatDOB(student)}</p>
                <a href="here">Show More...</a>
                <div>{Object.values(student.certifications).every((certificate) => certificate === true) && student.codewars.current.total >= 600 ? <h4>On Track to Graduate</h4>: <h4>not on Track</h4>}</div>
            </div>
                )})}
        </div>}
        </div>
    )
}

export default Students

