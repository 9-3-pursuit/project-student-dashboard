import Student from "./Student";
export default function StudentList({data}) {
    return (
        <section className="student-list">
            <h2>All Students</h2>
            <p>Total Students:{data.length}</p>
            <div>
                {data.map((person) => {
                    return <Student key={person.id} data={data} person={person}/>;
                })}
            </div>
            
        </section>
    )
}