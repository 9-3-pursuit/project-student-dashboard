import { useState } from "react"
import Achievements from './Achievements';
import UserComments from './UserComments';

function StudentDetails({student, id, info, setInfo}) {
    const [showMore, setShowMore] = useState(false);

    function toggleShowMoreDetails() {
        setShowMore(!showMore);
    }

    return (
        <div>
            <a href='#' onClick={toggleShowMoreDetails}> {!showMore ? 'Show More...' : 'Show Less...'}</a>
            {showMore ? (
        <div>
            <Achievements student={student} />
            <UserComments id={id} info={info} setInfo={setInfo} student={student} />
        </div>
            ) : (null)}
        </div>
    )
}

export default StudentDetails;