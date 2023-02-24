import { useState } from "react";
import Student from "./Student";
export default function StudentList ({data, activeCohort}) {
    return(
        <>
        <h1>{activeCohort}</h1>
        <p>Total Students:{data.length}</p>
        <ul>
        {data.map((student) => {
        return <Student Student={student}/>
        })}
        </ul>
        </>
    )
}