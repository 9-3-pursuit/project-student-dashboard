
import StudentP2 from "./StudentP2"


const Students = ({info,setInfo,cohort}) =>{

   

  let newArr = []  
 if (cohort === "All Student") {
      newArr = info
 }   else { 
     newArr = info.filter((x) => x.cohort.cohortCode === cohort)
 }

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
                        </div> 
                        <StudentP2 id={student.id} info={info}  setInfo={setInfo}  student={student} />


                               


                        
                    </li>))
                    
                }
            </ul>
        </div>

    )
}

export default Students
