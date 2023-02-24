import React, { useState } from 'react';
import data from './data/data.json';
import Students from './Component/Students';
import Header from './Component/Header';
import Cohorts from './Component/Cohorts';
import './App.css';

function App() {
  const [filteredStudents, setFilteredStudents] = useState(data);
  const [selectedCohort, setSelectedCohort] = useState('');

  const handleCohortClick = (cohortCode) => {
    setSelectedCohort(cohortCode);
    if (cohortCode === 'All Students') {
      setFilteredStudents(data);
    } else {
      const filterStudents = data.filter((student) => {
        const formattedCohortCode = student.cohort.cohortCode;
        const selectedCohortCode = cohortCode.split(' ').join('');
        const formattedCohortCodeWithoutSpaces = formattedCohortCode.split(' ').join('');
        return formattedCohortCodeWithoutSpaces === selectedCohortCode;
      });
      setFilteredStudents(filterStudents);
    }
  };

  return (
    <div className="grid_container">
      <Header className="header" />
      <Cohorts data={data} selectedCohort={selectedCohort} handleCohortClick={handleCohortClick} />
      <div className="students-container">
        <h2 className="title">{selectedCohort ? selectedCohort : 'All Students'}</h2>
        <p className="total_students">Total Students: {filteredStudents.length}</p>
        {filteredStudents.map((student) => (
          <Students className="card" student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
