// components
import { useState } from "react";

import StudentCard from "./StudentCard";

function StudentList({ students, filterTitle }) {
  const [comments, setComments] = useState({});

  return (
    <div className="students-list">
      <div className="students-list-info">
        <h2>{filterTitle}</h2>
        <p>
          Total Students: <span className="color-green">{students.length}</span>
        </p>
      </div>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              <StudentCard
                student={student}
                comments={comments}
                setComments={setComments}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentList;
