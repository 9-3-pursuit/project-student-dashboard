import "./CohortList.css";
import { studentData } from "../../data/data";
import SingleCohort from "./SingleCohort";

export default function CohortList({ handleClick }) {
  const cohortCodes = studentData.reduce(getUniqueCohortCodes, []);
  const AllCohortOptions = ["All Students", ...cohortCodes];

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

function getUniqueCohortCodes(uniqueCodesArray, { cohort: { cohortCode } }) {
  if (!uniqueCodesArray.includes(cohortCode)) {
    uniqueCodesArray = [...uniqueCodesArray, cohortCode];
  }
  return uniqueCodesArray;
}
