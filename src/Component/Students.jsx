import React, { useState } from 'react';
import Student from './Student';
import './Students.css';

const Students = ({ data }) => {
  const [expandedStudentId, setExpandedStudentId] = useState(null);

  const handleShowDetails = (studentId) => {
    setExpandedStudentId(studentId === expandedStudentId ? null : studentId);
  };

  return (
    <div className="students-container">
      <h2>All Students</h2>
      <p>Total Students: {data.length}</p>
      {data.map((student) => (
        <div key={student.id} className="student-card">
          <h3>
            {student.names.preferredName} {student.names.middleName} {student.names.surname}
          </h3>
          <img src={student.profilePhoto} alt="Profile" />
          <p>Username: {student.username}</p>
          <p>Date of Birth: {student.dob}</p>
          <a href="#" onClick={() => handleShowDetails(student.id)}>
            {expandedStudentId === student.id ? 'Show Less' : 'Show More'}
          </a>
          {expandedStudentId === student.id && <Student student={student} />}
        </div>
      ))}
    </div>
  );
};

export default Students;
