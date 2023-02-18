import "./CohortList.css";
import { studentData } from "../../data/data";
import SingleCohort from "./SingleCohort";

export default function CohortList({ handleClick }) {
  const uniqueCohortCodes = studentData.reduce(getUniqueCohortCodes, []),
    sortedCohortCodes = sortsCohortCodes(uniqueCohortCodes),
    AllCohortOptions = ["All Students", ...sortedCohortCodes];

  return (
    <div className="cohort-list">
      <h2>Choose a Class by Start Date</h2>
      <table>
        <tbody>
          {AllCohortOptions.map((cohortCode) => (
            <SingleCohort cohortCode={cohortCode} handleClick={handleClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getUniqueCohortCodes(uniqueCodes, { cohort: { cohortCode } }) {
  if (!uniqueCodes.includes(cohortCode)) {
    uniqueCodes = [...uniqueCodes, cohortCode];
  }
  return uniqueCodes;
}

function sortsCohortCodes(cohorts) {
  const seasons = { Spring: 1, Summer: 2, Fall: 3, Winter: 4 };

  const humanReadableList = cohorts.map(
    (cohort) => `${cohort.slice(0, -4)} ${cohort.slice(-4)}`
  );

  const SortedList = humanReadableList.sort((a, b) => {
    const splitA = a.split(" ");
    const splitB = b.split(" ");
    return splitA[1] - splitB[1] || seasons[splitA[0]] - seasons[splitB[0]];
  });

  return SortedList.map((cohort) => cohort.split(" ").join(""));
}
