import "./CohortList.css";
import { studentData } from "../../data/data";

export default function CohortList({ handleClick, setCohortFilter }) {
  const cohortCodes = studentData.reduce(getUniqueCohortCodes, []);
  const AllCohortOptions = ["All Students", ...cohortCodes];

  return (
    <div className="cohort-list">
      <h2>Choose a Class by Start Date</h2>
      <table>
        <tbody>
          {AllCohortOptions.map((cohortCode) => (
            <tr key={cohortCode}>
              <td
                onClick={() => {
                  setCohortFilter(cohortCode);
                  handleClick();
                }}
              >
                {cohortCode === "All Students"
                  ? cohortCode
                  : `${cohortCode.slice(0, -4)} ${cohortCode.slice(-4)}`}
              </td>
            </tr>
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
