import "./StudentList.css";
import { studentData } from "../../data/data";

export default function StudentList({ cohortFiler }) {
  let studentList = [...studentData];
  if (cohortFiler !== "All Students") {
    studentList = studentList.filter(
      ({ cohort: { cohortCode } }) => cohortCode === cohortFiler
    );
  }
  return (
    <>
      <div className="student-list">
        <h2>
          {cohortFiler === "All Students"
            ? cohortFiler
            : `${cohortFiler.slice(0, -4)} ${cohortFiler.slice(-4)}`}
        </h2>
        <p>Total Students: 0</p>
        <div>
          {studentList.map((student) => {
            const {
              profilePhoto,
              names: { preferredName, middleName, surname },
              username,
              dob,
            } = student;
            return (
              <div className="single-student" key={student.id}>
                <img
                  src={profilePhoto}
                  alt={preferredName + " profile photo"}
                />
                <div>
                  <h3>
                    {`${preferredName} ${middleName.slice(0, 1)}. ${surname}`}
                  </h3>
                  <p>{username}</p>
                  <p>
                    <strong>Birthday:</strong>
                    {dob}
                  </p>
                </div>
                <div>
                  <p className="show-more">Show More...</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
