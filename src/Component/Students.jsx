import React, { useState } from 'react';
import Student from './Student';
import './Students.css';



const Students = ({ student }) => {
  const [expandedStudentId, setExpandedStudentId] = useState(null);
  
  const handleShowDetails = (studentId) => {
    setExpandedStudentId(studentId === expandedStudentId ? null : studentId);
  };

 
  const convertedDateOfBirths = (dob) => {
    
      const dateOfBirth = dob.split('/')
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December']
      const month = months[dateOfBirth[0] - 1]
      const day = dateOfBirth[1]
      const year = dateOfBirth[2]
      const convertedDateOfBirth = `${month} ${day}, ${year}`
      return convertedDateOfBirth
  
   
  }

  

  return (
    
      <div className='student_card_container'>
        <div className="student_card" key={student.id} >
          <h3>
            {student.names.preferredName} {student.names.middleName} {student.names.surname}
          </h3>
          <img src={student.profilePhoto} alt="Profile" />
          <p>Username: {student.username}</p>
          <p>Date of Birth: {convertedDateOfBirths(student.dob)}</p>
          <a href="#" onClick={() => handleShowDetails(student.id)}>
            {expandedStudentId === student.id ? 'Show Less...' : 'Show More...'}
          </a>
          {expandedStudentId === student.id &&
            <Student student={student} />}
          
          
      </div>
      </div>
      
    
  );
};

export default Students;
