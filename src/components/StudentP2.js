

import { useState } from "react";
import Achievement from "./Achievement";
import Comments from  "./Comments"

const StudentP2 = ({id,info,setInfo,student}) => {
    const [showMore, setShowmore] = useState(false);

    function toggleShowMore() {

      setShowmore(!showMore);
    }

    return (
        <div>
         <a href="#" onClick={toggleShowMore}> {!showMore ? "Show more..." : "Hide less..."}</a>
        {showMore ? ( 
          <div>
            < Achievement student={student}/>
            < Comments id={id} info={info} setInfo={setInfo} student={student}/>
          </div>
        ) : (null)}

        </div>
        
    )
}

export default StudentP2