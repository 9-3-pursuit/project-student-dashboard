function Students (props) {
    const months = ["Januray", "Feburay", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function formatDOB (student) {
        const splitStudent = student.dob.split("/")
        return (`${months[parseInt(splitStudent[0]-1)]} ${splitStudent[1]}, ${splitStudent[2]}`);
    }

    return (
        <div>
            <h3>All Students</h3>
            <h4>Total Students: {props.studentsData.length}</h4>
            {props.studentsData.map((student) => {return(
                <div key={student.id}>
                    <img src={student.profilePhoto}/>
                    <h4>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h4>
                    <h4>{student.username}</h4>
                    <h4>Birthday: {formatDOB(student)}</h4>
                    <a href="">Show More...</a>
                </div>
            )})}

        </div>
    )
}

export default Students