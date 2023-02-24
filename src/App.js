import NavBar from "./Components/NavBar.js"
import InfoCards from "./Components/InfoCards.js";
import { useState } from "react";
import data from "./data/data.json"

function App() {

  const [list, setList] = useState(data);
  const [title, setTitle] = useState('All Students');

  return (
    <div className='App'>
    <div className='title'>
    <h1>Student Dashboard</h1>
    </div>
    <InfoCards data={list} title={title}/>
    <NavBar data={data} setList={setList} setTitle={setTitle}/>
  </div>
);
}
export default App;