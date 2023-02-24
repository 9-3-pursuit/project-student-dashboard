import SeeMore from "./SeeMore";
import {useState} from "react";

export default function CohortCard( {data} ) {

    const [show, setShow] = useState(false);
    const [comments, setComments] = useState(data.notes);

    return (
        <div className="card" >
            <img src={data.profilePhoto} alt={data.names.preferredName}/>

            <p className="graduate">{(data.certifications.resume && data.certifications.linkedin && data.certifications.mockInterview && data.certifications.github && data.codewars.current.total > 600) ? 'On Track to Graduate' : ''}</p>

            <p>{data.names.preferredName} {data.names.middleName[0]}. {data.names.surname}</p>

            <p>{data.username}</p>

            <p className="birthday"><span>Birthday:</span> {data.dob}</p>

            <button onClick={() => setShow(!show)}>{show ? 'Show Less...' : 'Show More...'}</button>

            {show ? <SeeMore student={data} comments={comments} setComments={setComments} /> : null}
        </div>
    )
};