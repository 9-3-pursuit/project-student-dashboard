import React from 'react';
import { useState } from 'react';
import Comments from './Comments';

const Student = ({ student}) => {

  

  const [comments, setComments] = useState('');
  return (
    <div>
      <p>Codewars Current Total: {student.codewars.current.total}</p>
      <p>Codewars Goal Total: {student.codewars.goal.total}</p>
      <p>Certifications:</p>
      <ul>
        <li>Resume: {student.certifications.resume ? 'Yes' : 'No'}</li>
        <li>LinkedIn: {student.certifications.linkedin ? 'Yes' : 'No'}</li>
        <li>Github: {student.certifications.github ? 'Yes' : 'No'}</li>
        <li>Mock Interview: {student.certifications.mockInterview ? 'Yes' : 'No'}</li>
      </ul>
      <p>Notes:</p>
      <ul>
        {student.notes.map((note) => (
          <li key={note.commenter}>{note.comment}</li>
        ))}
      </ul>
      <p>Cohort:</p>
      <ul>
        <li>Cohort Code: {student.cohort.cohortCode}</li>
        <li>Cohort Start Date: {student.cohort.cohortStartDate}</li>
        <li>Scores:</li>
        <ul>
          <li>Assignments: {student.cohort.scores.assignments}</li>
          <li>Projects: {student.cohort.scores.projects}</li>
          <li>Assessments: {student.cohort.scores.assessments}</li>
        </ul>
      </ul>
      <Comments comments = {comments} setComments ={setComments} />
    </div>
  );
};

export default Student;
