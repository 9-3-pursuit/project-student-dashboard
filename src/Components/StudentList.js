import Student from "./Student";
export default function StudentList ({data}) {
    console.log(data)

    return(
        <>
        <p>Total Students:{}</p>
        <ul>
        {data.map((student) => {
        return <Student Student={student}/>
        })}
        </ul>
        </>
    )
}