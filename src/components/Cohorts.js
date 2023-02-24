import { getFID } from "web-vitals";
import { useState } from "react";
import studentsList from "../data/data.json";



function filteredCohortLists({activeCohort}){
 const filterList = studentsList.filter((student) => {
    if(student.cohort.cohortCode === activeCohort.cohortId){
        console.log(activeCohort.chortId)
    }
 })
}

export default function Cohorts({students, setActiveCohort}) {



  const uniqueCohorts = new Set();
  const cohortList = students.map((student) => student.cohort.cohortCode);

  for (let cohortId of cohortList) {
    uniqueCohorts.add(cohortId);
    console.log(cohortId)
  }
  const cohorts = Array.from(uniqueCohorts);
 

  const cohortObj = cohorts.map((cohortId) => {
    const studentsInThisCohort = studentsList.find(
      (student) => student.cohort.cohortCode === cohortId
    );
   
    
    return {
      id: studentsInThisCohort.cohort.cohortCode,
      startDate: new Date(studentsInThisCohort.cohort.cohortStartDate),
      
    };
  });

  const sortedList = cohortObj.sort((a, b) => a.startDate - b.startDate);
  console.log(sortedList)

  const formattedTitles = sortedList.map((cohort) => {
    const cohortMonth = cohort.id.slice(0, cohort.id.length - 4);
    const cohortYear = cohort.id.slice(cohort.id.length - 4);
    const displayFormat = `${cohortMonth} ${cohortYear}`;
    
    return (
      <div className="cohortList">
        <ul>
          
          <li  className="cohorts" key={students.id} onClick={()=> {
            setActiveCohort(studentsList)
          }}>
            {displayFormat}
            
          </li>
        </ul>
      </div>
    );
  });


  const cohortTitles = formattedTitles.map((title) => {
 
    return (
        <>
        
        {title}
        </>
    )
    });
  return (
    < >
     <li className="allStudents">All Students</li>
     {cohortTitles}   
    </>
  )
}
        
        
