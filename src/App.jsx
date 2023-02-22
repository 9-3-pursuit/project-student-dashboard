import React from 'react';
import data from './data/data.json';
import Students from './Component/Students';
import Header from './Component/Header';
import Cohorts from './Component/Cohorts';
import Comments from './Component/Comments';
import { useState } from 'react';
// import './App.css';

// import {BrowserRoute, Routes, Route} from 'react-router-dom';
// import { useState } from 'react';


function App() {

// const [showDetails, setShowDetails] = useState(false)
// Use set to get unique values for the cohorts codes
// Put the set into an array
// Sort data by cohort (winter, fall, summer, spring) then by the year
  
  // const [comments, setComments] = useState('');

  
 


  return (
    <div>
    <Header />
    <Cohorts data={data} />
    {/* <Comments comments = {comments} setComments ={setComments} /> */}
    <Students data={data} />
    
    </div>
  );
}

export default App;
