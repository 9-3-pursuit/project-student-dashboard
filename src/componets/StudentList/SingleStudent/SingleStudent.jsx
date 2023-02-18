import { useState } from "react";
import StatsSection from "./StatsSection/StatsSection";
import OneOnOne from "./OneOnOne.jsx/OneOnOne";

export default function SingleStudent({ student }) {
  const [expanded, setExpanded] = useState(false);
  const {
    profilePhoto,
    names: { preferredName, middleName, surname },
    username,
    dob,
  } = student;

  const onTrack = checkStudentOnTrack(student); //Line 39

  return (
    <div className="single-student">
      <img src={profilePhoto} alt={preferredName + " profile photo"} />
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
      {expanded && (
        <>
          <StatsSection student={student} />
          <OneOnOne notes={student.notes} />
        </>
      )}
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
    dateStyle: "medium",
  }).format(new Date(...splitDOB));

  return formattedDOB;
}
