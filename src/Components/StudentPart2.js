import { useState } from "react";
import Achievement from "./Achievement"
import Comments from "./Comments"
export default function StudentPart2 ({student,id,info,setInfo}){
    const [showMore, setShowmore] = useState(false);

    function toggleShowMore() {
      setShowmore(!showMore);
    }

    return (
        <div>
         <button className="click" onClick={toggleShowMore}> {!showMore ? "Show more..." : "Hide less..."}</button>
        {showMore ? (
          <div>
          <Achievement student={student} />
          <Comments id={id} info={info} setInfo={setInfo} student={student}/>
          </div>
        ) :(null)}

        </div>
        
    )
}

