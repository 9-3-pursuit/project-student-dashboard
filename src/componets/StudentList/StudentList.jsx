import SingleStudent from "./SingleStudent";
import "./StudentList.css";

export default function StudentList({
  studentsOnScreen: { filter, students },
}) {
  return (
    <>
      <div className="student-list">
        <h2>
          {filter === "All Students"
            ? filter
            : `${filter.slice(0, -4)} ${filter.slice(-4)}`}
        </h2>
        <p>Total Students: {students.length}</p>
        <div>
          {students.map((student) => (
            <SingleStudent student={student} />
          ))}
        </div>
      </div>
    </>
  );
}
