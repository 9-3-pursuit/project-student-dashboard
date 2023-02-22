import studentsList from "../data/data.json";


const uniqueCohorts = new Set();


export default function getFilteredCohortList(studentsList) {
    // const cohortsList = studentsList.map((student) => ({ 
    //     id: student.cohort.cohortCode,
    //     startDate: new Date(student.cohort.cohortStartDate),
    // }));//stop map here just map student.cohort.cohortCode no need to assign to variable cohortCode
        // for (let cohortId of cohortsList) {
        //     uniqueCohorts.add(cohortId)
        // }
        // const cohortIDs = Array.from(uniqueCohorts);
        // console.log(cohortIDs)
        // cohortIDs((cohortId) => {
        // const studentsBelongingToCohort = studentsList.find((student) => 
        //    student.cohort.chortCode === cohortId
        //  );
        // })
        //  return {
        // id: studentBelongingToCohort.cohort.id, startDate: new Date(studentBelongingToCohort.cohort.cohortStartDate), displayNamme: formatCohortName(studentsBelongingToCohort.cohortCode)
        // }   
    
        //  console.log(cohortsList)
       

}
getFilteredCohortList(studentsList)