
import { useState } from "react";
import Achievements from "./Achievements.js"
import Comments from "./Comments.js"

//? needs to import Achievements and comments from there components because student p2 will display the achivements and comment form.

const StudentP2 = ({student, id, info,setInfo}) => {
    const [showMore, setShowmore] = useState(false);
//? display of the extra data for the each student
    function toggleShowMore() {
      setShowmore(!showMore);
    }
//? toggleShowMore function to get access to show more
    return (
        <div>
        <button className="show" onClick={toggleShowMore}> {!showMore ? "Show more..." : "Show less..."}</button>
        {showMore ? ( 
          // ? the toggle button that works to show more details such as certificates and scores
        <div>
        <Achievements student={student}/>
          <Comments  id={id} info={info} setInfo={setInfo} student={student}/>
          </div>
        ) : (null)}

        </div>
        
    )
}
          //? id, info along with student are states that is plugged in as props and must be pushed into comments, for the comment component. Like app.js you must follow the branches to get to the section you need.
          //? achievement accepts the student prop from studentsP2, student and app.js like a tree
          // ? named StudentP2 component because I have 2 student components and P2 is basically inside of student component. student p2 is the student data that is shown on show more
export default StudentP2 