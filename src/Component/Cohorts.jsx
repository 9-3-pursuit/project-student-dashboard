import { useState } from "react";
import './Cohorts.css';




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

    // console.log("formattedCohortCodes:", formattedCohortCodes)
    


    return (
        <div className="cohorts">
            <h2>Choose a Class by Start Date</h2>
            <button className="cohort"  onClick={() => handleCohortClick("All Students")} >All Students</button>
            {formattedCohortCodes.map((cohort) => {
                return (
                    <div className="cohort2" key={cohort}>
                        <button className="cohort1" onClick={() => handleCohortClick(cohort)}>{cohort}</button>
                    </div>

                )
            })}

        
            
            
        </div>
    )
}

export default Cohorts