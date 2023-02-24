import StudentShowMore from "./StudentShowMore"
import "./Student.css"
import { useState } from "react"
export default function Student ({Student}) {
    const [comments, addNewComment] = useState(Student.notes ? Student.notes : [])
    return(
        <>
        <li key={Student.id} className="student">
            <div className="studentInitial">
            <div className="div1">
                <img src="../instruction-assets/1600w-oEqs2yqaL8s.webp"></img>
            </div>
            <div className="div2">
            <p>{Student.names.preferredName} {Student.names.middleName[0]}. {Student.names.surname}</p>
            <p>{Student.username}</p>
            <p>Birthday:{Student.dob}</p>
            <StudentShowMore student={Student} comments={comments} addNewComment={addNewComment}/>
            </div>
            <div className="div3">
            {Student.certifications.resume && Student.certifications.linkedin && Student.certifications.mockInterview && Student.certifications.github && Student.codewars.current.total>600 ? <aside>On Track To Graduate</aside>: <></>}
            </div>
            </div>
        </li>
        </>
    )
}