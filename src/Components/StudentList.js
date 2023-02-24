
import StudentData from "./StudentData";

export default function StudentList({cohorts , cohortFilter}) {
    function formatCohort(cohort) {
        if (cohort === "All Students") {
            return cohort;
        } else {
            const cohortSplit = cohort.split("")
            cohortSplit.splice(-4, 0, " ")
            const cohortTitle = cohortSplit.join("")
            return cohortTitle;   
        }
    }
    const students = cohortFilter.map((student, i) => {
        const middleName = student.names.middleName[0];
        const dob = student.dob.split('/');
        dob.unshift(dob.pop());
        dob[1] -= 1;
        const dateString = new Intl.DateTimeFormat('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(Date.UTC(...dob)).replace(/,/g, ',');
        return(
           <div key={i}> 
            <StudentData 
                student={student}
                middleName={middleName}
                dateString={dateString}
            />
      
            </div>
        )
    })
    return (
        <div >
            <h2>{formatCohort(cohorts)}</h2>
            <h4>Total Students: <span className="color-green">{students.length}</span></h4>
            {students}
        </div>
    );
  }
  