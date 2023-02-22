import Student from "./Student";
import "../styles/Students.css";

const Students = ({ studentDataClone, addNewNoteToStudent }) => {
  return (
    <div className="col-start-4 col-span-4 bg-gradient-to-r to-teal-600 h-screen overflow-y-scroll">
      <div className="sticky top-0 bg-cyan-400">
        <h2 className="py-4 ">All Students</h2>
        <p className="py-4">Total Students: {studentDataClone.length}</p>
      </div>

      <div className="max-h-screen">
        {studentDataClone.map((student) => {
          return <Student student={student} addNewNoteToStudent={addNewNoteToStudent} />;
        })}
      </div>
    </div>
  );
};

export default Students;
