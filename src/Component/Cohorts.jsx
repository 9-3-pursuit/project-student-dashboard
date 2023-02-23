import { useState } from "react";



const Cohorts = ({data, handleCohortClick}) => {
    
    
   

    // console.log("props:", props)
    // console.log("props.data:", props.data)

    const cohortCodes = data.map((student) => student.cohort.cohortCode)
    const uniqueCohortCodes = new Set(cohortCodes)
    const cohortCodesArray = [...uniqueCohortCodes]
    const seasons = { Winter: 0, Spring: 1, Summer: 2, Fall: 3 }
    const compareSeasonsAndYears = (a, b) => {
        const seasonA = a.slice(0, -4);
        const yearA = a.slice(-4);
        const seasonB = b.slice(0, -4);
        const yearB = b.slice(-4);
        if (yearA !== yearB) {
          return yearB - yearA; 
        } else {
          return seasons[seasonA] - seasons[seasonB]; 
        }
    };
    
    
    const sortedCohortCodes = cohortCodesArray.sort(compareSeasonsAndYears)
    const formattedCohortCodes = sortedCohortCodes.map((cohortCode) => {
        const season = cohortCode.slice(0, -4);
        const year = cohortCode.slice(-4);
        return `${season} ${year}`;
    });

    console.log("formattedCohortCodes:", formattedCohortCodes)
    
    
    

    

    // const filteredStudents = selectedCohort !== "" ?
    // props.data.filter((student) => {
    //     const formattedCohortCode = student.cohort.cohortCode;
    //     const selectedCohortCode = selectedCohort.split(" ").join(""); 
    //     const formattedCohortCodeWithoutSpaces = formattedCohortCode.split(" ").join(""); 
    //     return formattedCohortCodeWithoutSpaces === selectedCohortCode;
    // })
    // : props.data;

    
   

    
   
    

    return (
        <div>
            <h2>Choose a Class by Start Date</h2>
            <a href="#" onClick={() => handleCohortClick("All Students")} >All Students</a>
            {formattedCohortCodes.map((cohort) => {
                return (
                    <div key={cohort}>
                        <a href="#" onClick={() => handleCohortClick(cohort)}>{cohort}</a>
                    </div>

                )
            })}

        
            
            
        </div>
    )
}

export default Cohorts