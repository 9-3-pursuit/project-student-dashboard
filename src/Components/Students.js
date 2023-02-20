import StudentDetails from './StudentDetails.js'

const Students = ({info, setInfo, cohort}) => {

    let newArr = []
    if (cohort === 'All Students') {
        newArr = info
    } else {
        newArr = info.filter((x) => x.cohort.cohortCode === cohort)
    }

    return (
        < div className="students">
                <h3>{cohort.replace(/\d+/g, '')+ " " + cohort.replace(/\D/g,'')}</h3>
                <p>Total Students: {newArr.length}</p>
            <ul>
                {newArr.map((student,i) => (<li key={i} className="individualStudent">
                <div className="individualStudent">
                    <img src={student.profilePhoto} alt="Profile"></img>
                        
                <div className="studentDetailedInfo">
                    <p>{student.names.preferredName} {student.names.middleName.slice(0, 1)}. {student.names.surname}</p>
                    <p>{student.username}</p>
                    <p>Birthday: {student.dob}</p>
                </div>
                </div>
                <StudentDetails id={student.id} info={info} setInfo={setInfo} student={student}/></li>))}
            </ul>
        </div>

    )
}

export default Students;