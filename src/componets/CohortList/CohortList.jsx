import "./CohortList.css";
import { studentData } from "../../data/data";

export default function CohortList() {
  const cohortCodes = studentData.reduce(getUniqueCohortCodes, []);
  const ListedCohorts = ["All Students", ...cohortCodes];

  return (
    <div className="cohort-list">
      <h2>Choose a Class by Start Date</h2>
      <table>
        {ListedCohorts.map((code) => (
          <tr>
            <td>
              {code === "All Students"
                ? code
                : `${code.slice(0, -4)} ${code.slice(-4)}`}
            </td>
          </tr>
        ))}
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
