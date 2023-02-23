// TODO: Cohorts


export default function Cohort({ info, setCohort }) {

    function pickedCohort(before) {
        setCohort(before)
    }
    // * sets before cohort to picked/after cohort as user is clicking through the info

    function noDuplicate(noStudentArr) {
        return noStudentArr.filter((before, after) => noStudentArr.indexOf(before) === after)
        // * function does the follow run through w/ these methods to not duplicate the  student info --v
        // The filter() method creates a new array filled with elements that pass a test provided by a function.
        //The indexOf() method returns the position of the first occurrence of specified character(s) in a string.
    }

    // * sets a return array w/ the mapped through of student cohort season info
    // * then sorted through the seasons by corresponding year -> all 2025 cohorts together & all 2026 cohorts together
    let returnArr = noDuplicate(info.map((student) => student.cohort.cohortCode)).map((season) => {
        return { seasonYear: season, justOneYear: season.replace(/\D/g, '') }
    }).sort((first, second) => { return (first.justOneYear - second.justOneYear) })
    returnArr.unshift({ seasonYear: "All Students", justOneYear: "" })

    //  ? .Sort() attempt & results ---v
    //let organizedArr = returnArr.sort() 
    // organizedArr.unshift("All Students")
    // {organizedArr.map((before, after) => <li key={after} onClick={() => pickedCohort(before)}>{before.replace(/\d+/g, '') + " " + before.replace(/\D/g, '')}<hr></hr></li>)}
    // ? sorts by season then year but not all years together ---^

    // let sortedArr=returnArr.sort(function(a, b){
    //     if(a.cohort.cohortCode < b.cohort.cohortCode) { return -1; }
    //     if(a.cohort.cohortCode > b.cohort.cohortCode) { return 1; }
    //     return 0; 

    // sortedArr.unshift("All Students")
    // }
    // )
    // ? breaks page 🤦🏾‍♀️ --- ^

    // * the new array of info is set with a map through of the previous function by the following methods --v
    //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    // map() creates a new array from calling a function for every array element. 
    // map() calls a function once for each element in an array. 

    // * returns mapped through return array with the choosen cohort hooked to the button
    // .replace(), modifies the string to the coders desire without changing the orignal data
    return (
        <div className="cohorts">
            <h2>Chooose a Class by Start Date📑⤵️</h2>
            <hr></hr>
            <ul>
                {returnArr.map((before, after) => <li key={after} onClick={() => pickedCohort(before.seasonYear)}>{before.seasonYear.replace(/\d+/g, '') + " " + before.justOneYear}<hr></hr></li>)}

            </ul>

        </div >
    )
}