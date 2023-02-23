import studentData from "./data.json"
// // for static site
// const studentDataCopy = [...studentData];
// const spring2025 = studentDataCopy.filter((student) => {
//     return student.cohort.cohortCode === "Spring2025"
// });
// export default spring2025;
// // for static site

function getCohortListFromStudentData(students) {

    const allCohorts = students.map((student) => {
        return (student.cohort.cohortCode);
    });

    const uniqueCohorts = new Set();
    for (let cohortId of allCohorts) {
        uniqueCohorts.add(cohortId);
    }

    const cohortIDs = Array.from(uniqueCohorts);

    const unsortedCohortList = cohortIDs.map((cohortId) => {
        const studentBelongingToCohort = students.find((student) => {
            return student.cohort.cohortCode === cohortId;
        })


        return {
            id: studentBelongingToCohort.cohort.cohortCode,
            startDate: new Date(studentBelongingToCohort.cohort.cohortStartDate),
            displayName: formatCohortName(studentBelongingToCohort.cohort.cohortCode),
        };
    });

    const sortedCohortList = unsortedCohortList.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    return sortedCohortList;
}

function formatCohortName(cohortId) {
    const season = cohortId.slice(0, -4);
    const year = cohortId.slice(-4);
    return `${season} ${year}`
}

let cohortListData = getCohortListFromStudentData(studentData);

export default cohortListData