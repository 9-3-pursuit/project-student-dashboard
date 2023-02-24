import StudentPart2 from "./StudentPart2"
export default function Student({info,cohort,setInfo}){
    let newStudentArr = []
     if(cohort === "All Student"){
        newStudentArr = info
     }else{
        newStudentArr= info.filter((x)=> x.cohort.cohortCode === cohort)
     }
  return (
    <div className="students">
      <h3>{cohort.replace(/\d+/g, '')+ " " + cohort.replace(/\D/g,'')}</h3>
      <p>Total Student:{newStudentArr.length}</p>
      
      <ul>
      {
                   newStudentArr.map((student,i) => (<li key={i} className="oneStudent">
                     <div className="infoPlacement">
                        <img src={student.profilePhoto} alt="Profile "></img>
                        
                        <div className="studentInfo">
                         <p>{student.names.preferredName} {student.names.middleName.slice(0, 1)}. {student.names.surname}</p>
                                <p>{student.username}</p>
                                <p>Birthdate: {student.dob}</p>
                             </div>
                             <div className="graduate">
                              {(student.codewars.current.total > 600) && (student.certifications.resume) && (student.certifications.linkedin) && (student.certifications.mockInterview) &&(student.certifications.github)? (<p>On tract to Graduate</p>) : (null)}
                             </div>
                        </div>
                                <StudentPart2 id={student.id} info={info} setInfo={setInfo} student={student}/> 
                     
                    </li>))
                    
                }
            </ul>
        </div>

    )
}

