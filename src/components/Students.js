




export default function Students({students}) {
    
    let studentProfiles = students.map((student) => {
        const firstName = student.names.preferredName;
        const middleInitial = student.names.middleName.charAt(0)
        const lastName = student.names.surname
        const studentID = student.id
        const studentImg = student.profilePhoto
        const studentUserName = student.username
        const studentCohort = students.cohort
        const studentBday = student.dob
        return (
        <div className="students">
        <h2 className="studentList">All Students</h2>
        <p id="totalStudents">Total Students: <span>{students.length}</span></p>
        <ul className="studentProfile">
        <br></br>
        <li key={student.id}>
            <img src={studentImg} width="100" height="100" alt="studentProfile"></img>
            <h4>{firstName} {middleInitial} {lastName}</h4>
            <p>{studentUserName}</p>
            <p id="birthday"><span>Birthday: </span>{studentBday}</p>
        </li>
        </ul>
        </div>    

    )})
    return studentProfiles
}
        
        