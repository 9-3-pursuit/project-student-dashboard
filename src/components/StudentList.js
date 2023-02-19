import Student from "./Student"

export default function StudentList() {

    return(
        <div className="studentListDiv">
            <h2>All Students</h2>
            <p>Total Students: {}</p>
            <div className="studentDivs">
                <Student />
            </div>
        </div>
        
    )
}