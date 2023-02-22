import studentData from "./data.json"

const studentDataCopy = [...studentData];
const spring2025 = studentDataCopy.filter((student) => {
    return student.cohort.cohortCode === "Spring2025"
});
export default spring2025;