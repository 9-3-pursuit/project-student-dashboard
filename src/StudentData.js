import React, {useState} from 'react';
import ShowMore from './ShowMore';

function StudentData({ el, birthday }) {
  const [showMore, setShowMore] = useState(false);
  function toggleShowMore() {
    setShowMore(!showMore);
  }
  function onTrack() {
    if (
      el.certifications.resume === true &&
      el.certifications.linkedin === true &&
      el.certifications.mockInterview === true &&
      el.certifications.github === true &&
      el.codewars.current.total > 600
    ) {
      return <p className="grad">On Track to Graduate 🎓</p>;
    }
  }
  return (
    <article className="Article" key={el.id}>
      <img src={el.profilePhoto} alt={el.names.preferredName}></img>
      <div className="studentCards">
        <h3>
          {el.names.preferredName} {el.names.middleName.charAt(0)}.{' '}
          {el.names.surname}
        </h3>
        <p>{el.username}</p>
        <p>
          <span>Birthday:</span>
          {birthday}
        </p>
        <button key={el.id} id="MoreButton" onClick={toggleShowMore}>
          {!showMore ? 'Show More ...' : 'Show Less ...'}
        </button>
      </div>
      {showMore && <ShowMore el={el} />}
      <p>{onTrack()}</p>
    </article>
  );
};
export default StudentData;