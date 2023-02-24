import StudentInfo from "./StudentInfo"
import Comments from "./Comments"
import {  useState } from "react"
export default function StudentShowMore ({student, comments, addNewComment}) {
    const [showMore, toggleShowMore] = useState(false)
    const [buttonText, setButtonText] = useState("Show More")
    function handleClick (e) {
        toggleShowMore(!showMore)
        setButtonText("Show Less")
    }
    if (showMore===true){
        return (
            <>
            <button onClick={handleClick} className="button">{buttonText}</button>
            <StudentInfo student={student}/>
            <Comments comments={comments} addNewComment={addNewComment}/>
            </>)
    } else {
        return(<button onClick={handleClick}>Show More</button>)
    }
}