import { useState } from "react";
import SingleStudent from "./SingleStudent/SingleStudent";
import StatsSection from "./SingleStudent/StatsSection/StatsSection";
import OneOnOne from "./SingleStudent/OneOnOne";
import "./StudentList.css";

export default function StudentList({ studentsOnScreen }) {
  const { filter, students } = studentsOnScreen;
  const initialNotes = students.map(({ id, notes }) => ({ id, notes }));
  const [allNotes, setAllNotes] = useState(initialNotes);

  return (
    <>
      <div className="student-list">
        <h2>
          {filter === "All Students" ? filter : formatsCohortFilter(filter)}
        </h2>
        <p>Total Students: {students.length}</p>
        <div>
          {students.map((student) => {
            return (
              <SingleStudent key={student.id} student={student}>
                <StatsSection student={student} />
                <OneOnOne
                  allNotes={allNotes}
                  setAllNotes={setAllNotes}
                  id={student.id}
                />
              </SingleStudent>
            );
          })}
        </div>
      </div>
    </>
  );
}

const formatsCohortFilter = (filter) =>
  `${filter.slice(0, -4)} ${filter.slice(-4)}`;
