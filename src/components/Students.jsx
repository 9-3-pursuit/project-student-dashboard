import Student from "./Student";
import "../styles/Students.css";

const Students = ({ studentDataClone, addNewNoteToStudent }) => {
  return (
    <div>
      <h2>All Students</h2>
      <p>Total Students: {studentDataClone.length}</p>
      {studentDataClone.map((student) => {
        return <Student student={student} addNewNoteToStudent={addNewNoteToStudent} />;
      })}
    </div>
  );
};

export default Students;
