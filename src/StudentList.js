export default function StudentList({ data }) {
  function showAllStudentsAmount() {
    const allStudents = data[data.length];
    console.log(data[data.length]);
  }

  return (
    <>
      <h2
        className="studentlist"
        onClick={() => {
          setAllStudents("allStudents");
        }}
      >
        All Students
      </h2>
      <p className="studentTotal">TotalStudents: {data.length}</p>
      <ul>
        {data.map((student) => {
          return (
            <li className="student" key={student.id}>
              <img className="photo" src={student.profilePhoto} />
              <span>
                {" "}
                {student.names.preferredName} {student.names.middleName}{" "}
                {student.names.surname}
              </span>
              <br></br>
              <span>{student.username}</span>
              <br></br>
              {student.dob}
            </li>
          );
        })}
      </ul>
    </>
  );
}
