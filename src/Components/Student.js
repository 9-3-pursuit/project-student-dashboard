export default function Student ({Student}) {
    console.log(Student)
    return(
        <>
        <li key={Student.id}>

            <p>{Student.names.preferredName}</p>
        </li>
        </>
    )
}