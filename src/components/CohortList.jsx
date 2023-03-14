function CohortList({ setFilteredStudents, students, setFilterTitle }) {
    const changeFilter = (event) => {
      setFilteredStudents(() => {
        if (event.target.id === "allStudents") return students;
        return students.filter((s) => s.cohort.cohortCode === event.target.id);
      });
      setFilterTitle(event.target.innerText);
    };
    return (
      <div>
        <h2>Choose a class by start date</h2>
        <ul className="cohort-ul" onClick={changeFilter}>
          <li id="allStudents">All Students</li>
          <li id="Winter2026">Winter 2026</li>
          <li id="Fall2026">Fall 2026</li>
          <li id="Summer2026">Summer 2026</li>
          <li id="Spring2026">Spring 2026</li>
          <li id="Winter2025">Winter 2025</li>
          <li id="Fall2025">Fall 2025</li>
          <li id="Summer2025">Summer 2025</li>
          <li id="Spring2025">Spring 2025</li>
        </ul>
      </div>
    );
  }
  export default CohortList;