import StudentDetails from './StudentDetails.js'

const Students = ({info, setInfo, cohort}) => {

    let studentArr = []
    if (cohort === 'All Students') {
        studentArr = info
    } else {
        studentArr = info.filter((x) => x.cohort.cohortCode === cohort)
    }

    return (
        < div className="students">
                <h3>{cohort.replace(/\d+/g, '')+ " " + cohort.replace(/\D/g,'')}</h3>
                <h4> Total Students: <span className='totalColor'>{studentArr.length} </span></h4>
            <ul>
                {studentArr.map((student,i) => (<li key={i} className="individualStudent">
                <div className="studentPhoto">
                    <img src={student.profilePhoto} alt="Profile"></img>
                        
                    <div className="studentDetailedInfo">
                        <p>{student.names.preferredName} {student.names.middleName.slice(0, 1)}. {student.names.surname}</p>
                        <p> 📧 {student.username}</p>
                        <p> 🥳 Birthday: {student.dob}</p>
                    </div>
                
                    <div>
                        {(student.codewars.current.total > 600) && (student.certifications.resume) && (student.certifications.linkedin) && (student.certifications.github) && (student.certifications.mockInterview) ? (<h4 className='onTrack'> On Track to Graduate 🎓 </h4>) : (null)}  
                    </div>
                </div>
                <StudentDetails id={student.id} info={info} setInfo={setInfo} student={student}/></li>))}
            </ul>
        </div>
        

    )
}

export default Students;