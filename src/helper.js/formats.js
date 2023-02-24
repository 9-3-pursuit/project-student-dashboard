export const formattedCohort = (cohortCode) => {
    const cohortSplit = cohortCode.split("")
    cohortSplit.splice(-4, 0, " ")
    const cohortJoin = cohortSplit.join("")
    return cohortJoin
}
export const fullName = (student) => {

    return (student.names.preferredName + " " + student.names.middleName + " " + student.names.surname)
}
