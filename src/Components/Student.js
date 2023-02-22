export default function Student({ student }) {
    return (
        <li key={student.id} className="student_card">
            <img src={student.profilePhoto} />
            <h5>{student.names.preferredName} {student.names.surname}</h5>
            <p>{student.username}</p>
            <p><a>Birthday:</a> {student.dob}</p>
            <br></br>
            <a>Show More...</a>
            <p>On Track to Graduate</p>
        </li>
    )
}