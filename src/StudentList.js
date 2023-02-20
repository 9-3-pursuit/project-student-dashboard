export default function StudentList({data}) {
//   let studentsData = data

    return (
        <>
        <h2>All Students</h2>
        <p>TotalStudents: 250</p>
        <ul>
        {data.map((student) => {
            return <li key={student.id}><img className="photo" src={student.profilePhoto}/><span>  {student.names.preferredName}  {student.names.middleName} {student.names.surname}</span><br></br><span>{student.username}</span><br></br>{student.dob}</li>
        })}
        </ul>
        </>
    )

}