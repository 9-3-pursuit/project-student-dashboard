import "./StudentList.css";
import { studentData } from "../../data/data";

export default function StudentList() {
  return (
    <>
      <div className="student-list">
        <h2>All Students</h2>
        <p>Total Students: 250</p>
        <div>
          {studentData.map((student) => {
            const {
              profilePhoto,
              names: { preferredName, middleName, surname },
              username,
              dob,
            } = student;
            return (
              <div className="single-student">
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
                  <p>Show More...</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
