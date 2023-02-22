import { useState } from "react";

const Cohorts = (props) => {

    console.log("props:", props)
    console.log("props.data:", props.data)

    const cohortCodes = props.data.map((student) => student.cohort.cohortCode)
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
    
    
    
    // const [showCohort, setShowCohort] = useState(false)

   
    
    // const handleShowCohort = () => {
    //     if (setShowCohort(!showCohort)) {
            
    //     }

    // }




    return (
        <div>
            <h2>Choose a Class by Start Date</h2>
            <a href="#">All Students</a>
            {formattedCohortCodes.map((cohort) => {
                return (
                    <div key={cohort}>
                        <a href="#">{cohort}</a>
                    </div>

                )
            })}

            
            
        </div>
    )
}

export default Cohorts