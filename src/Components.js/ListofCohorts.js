import { useState } from "react";
export default function ListofCohorts({ data, setCurrentCohort }) {

    let date = new Date(98, 1);
    date = new Date(22, 1);
    date = new Date("2/1/22");

    date.setYear(98);
    date.toString();
    date.setYear(22);
    date.toString();

    const cohortHeading = "Choose a Class by Start Date"
    const cohortSet = new Set();

    //create a copied object
    data.map((studentDataObj) => {
        cohortSet.add(`${studentDataObj.cohort.cohortCode} ${studentDataObj.cohort.cohortStartDate}`)
        return cohortSet
    })
    const cohortArray = Array.from(cohortSet)
    const updatedArray = cohortArray.map((cohortString) => {
        return cohortString.split(' ')
    })
    const sortedDateArray = updatedArray.sort((arrayOfDateStringA, arrayOfDateStringB) => {
        // change the value to render new date
        return new Date(arrayOfDateStringB[1]) - new Date(arrayOfDateStringA[1])
    })
    cohortSet.clear() // clears the on set so we can use it again

    sortedDateArray.map((newDateArray) => {
        return cohortSet.add(newDateArray[0])
    })
    const sortedCohortArray = Array.from(cohortSet)
    const spacedCohortArray = sortedCohortArray.map((cohort) => {
        const cohortSplit = cohort.split("")
        cohortSplit.splice(-4, 0, " ")
        const cohortJoin = cohortSplit.join("")
        return (

            <ul className="cohortonclick">
                <li key={cohort} onClick={() => setCurrentCohort(cohort)}>{cohortJoin} <hr></hr>
                </li>
            </ul>
        )



    })


    //when you list it make links a tags 
    return (
        <div>
            <h2> {cohortHeading}</h2>
            <div>
                <ul>
                    <li key={100} onClick={() => setCurrentCohort("AllStudents")}>All Students <hr></hr></li>
                    {spacedCohortArray}

                </ul>

            </div>


        </div>
    );
}
