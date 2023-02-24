import React from 'react';
import Comments from './Comments';
import './Student.css';


const Student = ({ student }) => {

  // const certifications = student.certifications;
  console.log("certifications")
  console.log("student", student)

  


  const onTrackToGraduate = () => {
    const resumeCertification = student.certifications.resume;
    const linkedInCertification = student.certifications.linkedin;
    const githubCertification = student.certifications.github;
    const mockInterviewCertification = student.certifications.mockInterview;
    const codewarsCurrentTotal = student.codewars.current.total;

    if (resumeCertification && linkedInCertification && githubCertification &&
      mockInterviewCertification && codewarsCurrentTotal >= 600) {
      return true;
    } else {
      return false;
    }
  }

 

  const onTrackToGraduateMessage = () => onTrackToGraduate() ? 'On Track to Graduate' :
    'Not on Track to Graduate';



 
  


  
  return (
    <div key={student.id} className='card1'>
      <div>
        <p className='onTrackToGraduate' >{onTrackToGraduateMessage()}</p>
      <p>Codewars Current Total: {student.codewars.current.total}</p>
      <p>Codewars Goal Total: {student.codewars.goal.total}</p>
      <p>Certifications:</p>
      <ul>
        <li>Resume: {student.certifications.resume ? '✅' : '❌'}</li>
        <li>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</li>
        <li>Github: {student.certifications.github ? '✅' : '❌'}</li>
        <li>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</li>
      </ul>
      <p>Notes:</p>
      <ul>
        {student.notes.map((note) => (
          <li key={note.id}> {note.commenter} says, "{note.comment}"</li>
        ))}
      </ul>
      <p>Cohort:</p>
      <ul>
        <li>Cohort Start Date: {student.cohort.cohortStartDate}</li>
        <li>Scores:</li>
        <ul>
          <li>Assignments: {student.cohort.scores.assignments *100}%</li>
          <li>Projects: {student.cohort.scores.projects *100}%</li>
          <li>Assessments: {student.cohort.scores.assessments *100}%</li>
        </ul>
      </ul>
      <Comments  student={student} />
      </div>
      </div>
  );
};

export default Student;
