import { useState } from "react";
import CohortDescription from "./Components/CohortDescription";
import CohortList from "./Components/CohortList";
import StudentCard from "./Components/StudentCard";
import React from "react";

function App() {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => e.preventDefault();
  // alert("New note by from ${commenter}: ${comment}");
  setComment("");
  setComment("");

  const handleCommenter = (e) => {
    setComment(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList />
      <StudentCard />
      <CohortDescription />
    </div>
  );
}

export default App;
