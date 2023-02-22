import Student from "./Student";
import "../styles/Students.css";

const Students = ({ studentDataClone, addNewNoteToStudent, cohortSelected, darkMode }) => {
  console.log(`This is from Students: ${darkMode}`);
  return (
    <div className="bg-gradient-to-r to-teal-600 grid grid-rows-[18%,82%] overflow-auto rounded-lg">
      <div className="h-auto sticky top-0 bg-emerald-400 text-center">
        <h2 className="py-4 text-8xl text-emerald-800 font-babylonica">{cohortSelected}</h2>
        <p className="py-4 text-2xl">
          <span className="">Total Students:</span> {studentDataClone.length}
        </p>
      </div>

      <div className="overflow-y-auto">
        {studentDataClone.map((student) => {
          return <Student student={student} addNewNoteToStudent={addNewNoteToStudent} darkMode={darkMode} />;
        })}
      </div>
    </div>
  );
};

export default Students;
