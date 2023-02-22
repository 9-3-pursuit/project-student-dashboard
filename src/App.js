import Header from "./Components/Header";
import StudentList from "./Components/StudentList";
import Cohorts from "./Components/Cohorts";
import StudentData from "./data/data.json";
function App() {
  const studentsCopy = [...StudentData];
  
  return (
    <div>
      <h1>Student Dashboard</h1>
      <StudentList data={studentsCopy}/>
    </div>
  );
}

export default App;
