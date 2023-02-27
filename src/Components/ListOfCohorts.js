// write a function that passes data.cohortCode as a prop 
// to populate to the list of cohorts & tell it to create them as links
// create new array to populate list with from data with no copies 
// order new cohortArray in decending order with smaller year on bottom (use cohort start date to order, but cohort code to show up on page)


function ListOfCohorts({info,setCohort}) {


  const allStudents = "All Students" /* will change to an onclick link to reset page */
  const cohortListHeader = "Choose A Class By Start Date."
  const cohortsSet = new Set(); /*prevents copies of the same date showing up. creates unique values, winter 2026 will not show up twice*/

  function removeDuplicate(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index)
}

let newArr = removeDuplicate(info.map((st) => st.cohort.cohortCode)).map((x) => { 
return {seasonyear: x , onlyyear: x.replace(/\D/g,'')} } ).sort((a, b) => { return (a.onlyyear - b.onlyyear)})
   /*map through our student data object & give us the code & date so we can sort. call it newArr*/
   
   newArr.unshift({seasonyear:"All Student", onlyyear:""})

  const cohortArray = Array.from(cohortsSet) /*take our cohortsSet obj & make it an array so we can iterrate & sort */
  const updatedArray = cohortArray.map((cohortString) => {
    return cohortString.split(" ")
  }) /* split our cohort array on the space between code & date so we can sort date */

  const sortedDateArray = updatedArray.sort((arrayofDatesA, arrayofDatesB) =>{
    return new Date(arrayofDatesB[1]) - new Date(arrayofDatesA[1])
    /* sort through dates & order them so that we get the order of cohorts that we want*/  
 })
    cohortsSet.clear() // clears our set to reuse to prevent copies . the array is ordered, now we don't want doubles

  const unsortedCohortArray = Array.from(cohortsSet)
  sortedDateArray.map((newDateArray) => { 
    return cohortsSet.add(newDateArray[0])
  }) /* map through our correctly dated array & give us back only the cohort code which is still not formatted correctly */


//create new variable & map through sortedCohortArray & add space via split & splice to get proper spacing
  const sortedCohortArray = unsortedCohortArray.map((cohort) =>{
   const cohortSplit = cohort.split("")
   cohortSplit.splice(-4, 0, " ")
   const cohortJoin = cohortSplit.join("")
   
    return (
      <p>{cohortJoin}</p>
    )
  })


  return (
    <div>
      <h3> {cohortListHeader} </h3>
      <ol> 
      {newArr.map((x,i) => <li  key={i} onClick={()=> setCohort(x.seasonyear)}>{x.seasonyear.replace(/\d+/g, '')+ " " + x.onlyyear} <hr></hr></li>)}
      </ol>

    </div>
);   
  }       
export default ListOfCohorts;
