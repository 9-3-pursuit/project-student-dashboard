import "./StudentList.css"

export default function Students({ currentCohortArray }) {

    const formatBirthday = new Intl.DateTimeFormat("en", {
        dateStyle: "long"
    })
   
    return(
        currentCohortArray.map(student => {
            const birthday = new Date(student.dob)
            return(
                <div key={student.id} className="student">
                    <img src="" alt={student.names.preferredName} />
                    <div className="studentMainInfo">
                        <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
                        <p>{student.username}</p>
                        <p><span className="birthdaySpan">Birthday:</span> {formatBirthday.format(birthday)}</p>
                    </div>
                    <p className="showMore">Show More...</p>
                    
                </div>
            )
        })
    )
}