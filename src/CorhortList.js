import React from 'react';

function CohortList(props) {
  const { data, handleCohortList } = props;
  const filterCohort = (cohortArr) => {
    let obj = {};
    for (let i = 0; i < cohortArr.length; i++) {
      if (!obj.hasOwnProperty(cohortArr[i])) {
        obj[cohortArr[i]] = cohortArr[i];
      }
    }
    return Object.keys(obj);
  };

  const displayCohort = (data, handleCohortList) => {
    const cohortArr = data.map((student) => {
      return student.cohort.cohortCode;
    });

    const filteredCohortArr = filterCohort(cohortArr);
    const sortedCohortArr = sortedCohort(filteredCohortArr);
    sortedCohortArr.unshift('All Students');
    return sortedCohortArr.map((cohortCode, index) => {
      return (
        <p key={index} onClick={() => handleCohortList(cohortCode)}>
          {cohortCode === 'All Students'
            ? 'All Students'
            : `${cohortCode.substring(0, cohortCode.length - 4)} 
					${cohortCode.substring(cohortCode.length - 4)}`}
        </p>
      );
    });
  };
  const sortedCohort = (filteredCohortArr) => {
    const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
    return filteredCohortArr.sort((cohortA, cohortB) => {
      const cohortAYear = Number(cohortA.substring(cohortA.length - 4));
      const cohortBYear = Number(cohortB.substring(cohortB.length - 4));
      const cohortASeason = cohortA.substring(0, cohortA.length - 4);
      const cohortBSeason = cohortB.substring(0, cohortB.length - 4);
      if (cohortAYear === cohortBYear) {
        return seasons.indexOf(cohortBSeason) - seasons.indexOf(cohortASeason);
      } else {
        console.log('this is cohort b year:', cohortBYear);
        return cohortBYear - cohortAYear;
      }
    });
  };
  return (
    <div className="cohort-list">
      <h4>
        <strong>Choose a Class by Start Date</strong>
      </h4>
      <section className="cohort-code">
        {displayCohort(data, handleCohortList)}
      </section>
    </div>
  );
}
export default CohortList;
