import Data from "./data/data.json";


  
  function Cohort({ Data, setCohort }) {
    function updateCohort(e) {
      setCohort(e.target.id);
    }
    return (
      <div className="cohort-list">
        <h2>Choose a Class by Start Date</h2>
        <button id="All Students" onClick={updateCohort}>
        All Students
      </button>
        <hr></hr>
        <button id="Winter2026" onClick={updateCohort}>
        Winter 2026
      </button>
        <hr></hr>
        <button id="Fall2026" onClick={updateCohort}>
        Fall 2026
      </button>
        <hr></hr>
        <button id="Summer2026" onClick={updateCohort}>
        Summer 2026
      </button>
        <hr></hr>
        <button id="Spring2026" onClick={updateCohort}>
        Spring 2026
      </button>
        <hr></hr>
        <button id="Winter2025" onClick={updateCohort}>
        Winter 2025
      </button>
        <hr></hr>
        <button id="Fall2025" onClick={updateCohort}>
        Fall 2025
      </button>
        <hr></hr>
        <button id="Summer2025" onClick={updateCohort}>
        Summer 2025
      </button>
        <hr></hr>
        <button id="Spring2025" onClick={updateCohort}>
        Spring 2025
      </button>
      </div>
    );
  }
  export default Cohort;