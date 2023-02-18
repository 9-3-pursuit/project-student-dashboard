import { useState } from "react";
import StatsSection from "./StatsSection/StatsSection";

export default function SingleStudent({ student }) {
  const [expanded, setExpanded] = useState(false);
  const {
    profilePhoto,
    names: { preferredName, middleName, surname },
    username,
    dob,
  } = student;

  const certOnTrack = Object.values(student.certifications).every(
    (value) => value !== false
  );
  const onTrack = certOnTrack && student.codewars.current.total >= 600;

  return (
    <div className="single-student" key={student.id}>
      <img src={profilePhoto} alt={preferredName + " profile photo"} />
      <div>
        <h3>{`${preferredName} ${middleName.slice(0, 1)}. ${surname}`}</h3>
        <p>{username}</p>
        <p>
          <strong>Birthday:</strong>
          {dob}
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
      {expanded && <StatsSection student={student} />}
    </div>
  );
}
