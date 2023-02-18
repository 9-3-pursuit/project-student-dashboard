
import "../Styles/Student.css"

const abbreviate__middleName = (name) => {
  return name.charAt(0) + "."; // abbreviate middle name
};

const format__dob = (dob) => {
  const [month, day, year] = dob.split("/"); // Split the date of birth and destructure as array of month, day, and year strings.
  const date = new Date(year, month - 1, day); // Create new Date object from the array and - 1 for zero-based indexing.
  const formattedMonth = date.toLocaleString("default", { month: "long" }); // Get the full month name in the user's default locale using the toLocaleString method.
  return `${formattedMonth} ${day}, ${year}`; // Return the formatted date of birth using a template literal.
};


const Student = ({ student }) => { // use destructuring to get the student object from the props
  const { profilePhoto, names, username, dob } = student; // use destructuring to get the relevant student properties
  console.log(student)
  return (
    <div className="style__EachStudent">
      <span>
          <img className="student__pic" src={profilePhoto} alt={names.preferredName} />
      </span>
      <main className="style__EachStudent__info">
        <h2>
          {names.preferredName}
          {abbreviate__middleName(names.middleName)}
          {names.surname}
        </h2>
        <h5>{username}</h5>
        <h5 className="last__h5"> 
          <span className="style__EachStudent__dob">Birthday: </span>
          <span>{format__dob(dob)}</span>
        </h5>
        <a href="#"> Show More...</a>
      </main>
    </div>
  );
};
export default Student;
