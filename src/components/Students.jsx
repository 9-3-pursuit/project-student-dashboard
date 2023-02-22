import Student from "./Student";
import "../styles/Students.css";

const Students = ({ studentDataClone, addNewNoteToStudent, cohortSelected }) => {
  return (
    <div className="bg-gradient-to-r to-teal-600 grid grid-rows-[12%,88%] overflow-auto">
      <div className="h-auto sticky top-0 bg-cyan-400 text-center">
        <h2 className="py-4 text-3xl">{cohortSelected}</h2>
        <p className="py-4 text-2xl">Total Students: {studentDataClone.length}</p>
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
