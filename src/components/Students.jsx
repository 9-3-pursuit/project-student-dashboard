import Student from "./Student";
import "../styles/Students.css";

const Students = ({ studentDataClone, addNewNoteToStudent }) => {
  return (
    <div className="bg-gradient-to-r to-teal-600 grid grid-rows-[10%,90%] overflow-auto">
      <div className="sticky top-0 bg-cyan-400">
        <h2 className="py-4 ">All Students</h2>
        <p className="py-4">Total Students: {studentDataClone.length}</p>
      </div>

      <div className="overflow-y-auto">
        {studentDataClone.map((student) => {
          return <Student student={student} addNewNoteToStudent={addNewNoteToStudent} />;
        })}
      </div>
    </div>
  );
};

export default Students;
