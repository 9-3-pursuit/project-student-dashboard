import React from "react";
import "./Students.css";
import More from "./More";

function Students({ Data }) {
  
  const studentData = Data.map((el) => {
    const dob = new Date(el.dob);
    const birthday = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(dob);
    return (
      <article key={el.id}>
        <img src={el.profilePhoto} alt={el.names.preferredName}></img>
        <div className="studentCards">
          <h3>
            {el.names.preferredName} {el.names.middleName.charAt(0)}.{" "}
            {el.names.surname}
          </h3>
          <p>{el.username}</p>
          <p>
            <span>Birthday: </span>
            {birthday}
          </p>
          <button id=">More">More ...</button>
          <More el={el} />
        </div>
      </article>
    );
  });

  return <div className="Return">{studentData}</div>;
}

export default Students;