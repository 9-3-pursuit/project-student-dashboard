import { useState, useEffect } from "react";

// components
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import CohortList from "./components/CohortList";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filterTitle, setFilterTitle] = useState("All Students");

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="cohort-list">
          <CohortList
            setFilteredStudents={setFilteredStudents}
            students={students}
            setFilterTitle={setFilterTitle}
          />
        </div>
        <div className="student-list">
          {filteredStudents.length > 0 && (
            <StudentList
              students={filteredStudents}
              filterTitle={filterTitle}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
