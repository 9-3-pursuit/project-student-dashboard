
function StudentList ({info,setInfo,cohort}) {

   
  let newArr = []  
 if (cohort === "All Student") {
      newArr = info
 }   else { 
     newArr = info.filter((x) => x.cohort.cohortCode === cohort)
 }

 const date = new Date();
 const [month, day, year] = [
   date.getMonth(),
   date.getDate(),
   date.getFullYear(),
 ];
 const [hour, minutes, seconds] = [
   date.getHours(),
   date.getMinutes(),
   date.getSeconds(),
 ]

    return (
       
       
        < div className="students">
            <div className="encabezado">
               <h3>{cohort.replace(/\d+/g, '')+ " " + cohort.replace(/\D/g,'')}</h3>
               <p>Total Students: {newArr.length}</p>
            </div>
            
            <ul>
                {
                    newArr.map((student,i) => (<li key={i} className="onestudent">
                        <div className="infoplacement">
                           <img src={student.profilePhoto} alt="Profile "></img>
                           <div  className="studentinfo">
                             <p>{student.names.preferredName} {student.names.middleName.slice(0, 1)}. {student.names.surname}</p>
                             <p>{student.username}</p>
                             <p>Birthdate: {student.dob}</p>
                          </div>
                           <div className="graduate">
                            { (student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview  & (student.codewars.current.total > 600)) ? 
                                (<h4>On Track To Graduate</h4>) : (null)
                            }    
                           </div>
                        </div> 
                        


                               


                        
                    </li>))
                    
                }
            </ul>
        </div>

    )
}



  
  export default StudentList;