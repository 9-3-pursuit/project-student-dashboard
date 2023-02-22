import Student from "./Student"

export default function StudentList({ spring2025 }) {
    return (
        <div className="student_list">
            <h3>Spring 2025</h3>
            <p>Total Students: <a>{spring2025.length}</a></p>
            {spring2025.map((student) => {
                return (
                    <>
                        <div className="student">
                            <Student student={student} />
                        </div>
                    </>
                )
            })}
        </div>
    )
}