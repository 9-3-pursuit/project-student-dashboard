import StudentP2 from "./StudentP2"


const Students = ({info, cohort, setInfo}) =>{

   

  let newArr = []  
 if (cohort === "All Students") {
      newArr = info
 }   else { 
     newArr = info.filter((x) => x.cohort.cohortCode === cohort)
 }
    // ? filter the array of the cohort seasons and year into seperate sections
    return (
       
       
        < div className="students">
             <h3>{cohort.replace(/\d+/g, '')+ " " + cohort.replace(/\D/g,'')}</h3>
             <p>Total Students: {newArr.length}</p>
            <ul>
                {
                    newArr.map((student,i) => (<li key={i} className="oneStudent">
                     <div className="infoPlacement">
                        <img src={student.profilePhoto} alt="Profile "></img>

                        <div className="studentInfo">
                         <p>{student.names.preferredName} {student.names.middleName.slice(0, 1)}. {student.names.surname}</p>
                         <p>{student.username}</p>
                         <p>Birthdate: {student.dob}</p>
                        </div>
                            {/* //? student info of first name + middle name, slice the name and keep the first letter of the middle name + last name.   */}
                             <div>
                                {(student.codewars.current.total > 600 ) && (student.certifications.resume) &&(student.certifications.linkedin) && (student.certifications.github) && (student.certifications.mockInterview) ? (<p className="graduates">On Track To Graduate</p>) : (null)}
                             </div>
                     </div>     
                                <StudentP2 id={student.id} info={info} setInfo={setInfo} student={student}/>  
                                
                                {/* //? student scores for codewars + current score of + total score. student list certifications and the track to graduate on those who have obtained all certificates and hase a total score of 600 */}


                               


                        
                    </li>))
                    
                }
            </ul>
        </div>

    )
}

export default Students