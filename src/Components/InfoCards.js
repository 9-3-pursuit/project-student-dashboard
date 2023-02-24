import CohortCard from "./CohortCard";

export default function InfoCards ({data, title}) {
    return (
        <div className="all-students">
            <h3>{title}</h3>
            <p className="total">Total Students: <span>{data.length}</span></p>
            <div className="wrapper">
            { data.map(student => <CohortCard key={student.id} data={student}/>) }
            </div>
        </div>
    )
};