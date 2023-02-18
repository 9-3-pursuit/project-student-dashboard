export default function SingleCohort({ handleClick, cohortCode }) {
  return (
    <>
      <tr>
        <td
          onClick={() => {
            handleClick(cohortCode);
          }}
        >
          {cohortCode === "All Students"
            ? cohortCode
            : `${cohortCode.slice(0, -4)} ${cohortCode.slice(-4)}`}
        </td>
      </tr>
    </>
  );
}
