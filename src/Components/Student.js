import "./Student.css";
export default function Student({person}) {

    return (
        <article className="Card">
            <img src={person.profilePhoto} alt={person.names.preferredName}></img>
            <div className="studentInfo">
                <aside>
                    <h3>
                        {person.names.preferredName} {person.names.middleName}{" "} {person.names.surname}
                    </h3>
                    <p>{person.username}</p>
                    <p><span>Birthday:</span> {person.dob}</p>
                </aside>

                <button className="toggle-details">Show more...</button>
                <p className="onTrack"></p>
            </div>
        </article>
    )
}