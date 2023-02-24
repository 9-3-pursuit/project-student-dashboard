import { useState } from "react";

export default function SingleStudent({ student, children }) {
  const [expanded, setExpanded] = useState(false);
  const {
    profilePhoto,
    names: { preferredName, middleName, surname },
    username,
    dob,
  } = student;

  const onTrack = checkStudentOnTrack(student);

  return (
    <div className="single-student">
      <img src={profilePhoto} alt={`${preferredName} ${surname}'s profile`} />
      <div>
        <h3>{`${preferredName} ${middleName.slice(0, 1)}. ${surname}`}</h3>
        <p>{username}</p>
        <p>
          <strong>Birthday:</strong> {formatDOB(dob)}
        </p>
      </div>
      <div>
        {onTrack && <h5 className="on-track">On Track To Graduation!</h5>}
      </div>
      <div>
        <p className="show-more" onClick={() => setExpanded(!expanded)}>
          Show {expanded ? "Less" : "More"}...
        </p>
      </div>
      {expanded && <>{children}</>}
    </div>
  );
}

function checkStudentOnTrack(student) {
  const certOnTrack = Object.values(student.certifications).every(
    (value) => value !== false
  );
  const onTrack = certOnTrack && student.codewars.current.total >= 600;

  return onTrack;
}

function formatDOB(DOB) {
  let splitDOB = DOB.split("/").reverse();
  let formattedDOB = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date(...splitDOB));

  return formattedDOB;
}
