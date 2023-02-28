// import React from 'react';

// class ShowMore extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showMore: false,
//     };
//   }
//   render() {
//     const {student} = this.props;
//     const notes = student.notes;
//     const currentTotal = student.codewars.current.total;
//     const currentLastWeek = student.codewars.current.lastWeek;
//     const goalTotal = student.codewars.goal.total;
//     const goalLastWeek = student.codewars.goal.lastWeek;
//     const percentage = ((currentTotal / goalTotal) * 100).toFixed(0);

//     const showMoreButton = () => {
//       this.setState({
//         showMore: !this.state.showMore,
//       });
//     };

//     const changeCodewarsPercentageColor = (percentage) => {
//       return percentage >= 100
//         ? 'green'
//         : percentage > 50 && percentage < 100
//         ? 'yellow'
//         : 'red';
//     };

//     const toggle = this.state.showMore;

//       return (
//       <div>
//         <button className="show-more" onClick={showMoreButton}>
//           {toggle ? 'Show Less...' : 'Show More...'}
//         </button>
//         {toggle && (
//           <div>
//             <h4 className="codewars">Codewars</h4>
//             <p>Current Total: {currentTotal}</p>
//             <p>Current LastWeek: {currentLastWeek}</p>
//             <p>Goal Total: {goalTotal}</p>
//             <p>Goal LastWeek: {goalLastWeek}</p>
//             <p>
//               <span
//                 style={{ color: changeCodewarsPercentageColor(percentage) }}
//               >
//                 {' '}
//                 <strong> Percentage Of Goal Achieved: {percentage}%</strong>
//               </span>
//             </p>
//             <br></br>
//             <h4 className="scores">Scores</h4>
//             <p className="scores">
//               Assignments: {student.cohort.scores.assignments * 100}%
//             </p>
//             <p className="scores">
//               Projects: {student.cohort.scores.projects * 100}%
//             </p>
//             <p className="scores">
//               Assessments: {student.cohort.scores.assessments * 100}%
//             </p>
//             <br></br>
//             <h4 className="certifications">Certifications</h4>
//             <p className="certifications">
//               Resume: {student.certifications.resume ? '✅' : '❌'}
//             </p>
//             <p className="certifications">
//               Linkedin: {student.certifications.linkedin ? '✅' : '❌'}
//             </p>
//             <p className="certifications">
//               Github: {student.certifications.github ? '✅' : '❌'}
//             </p>
//             <p> Mock Interview:{' '}
//               {student.certifications.mockInterview ? '✅' : '❌'}
//             </p>
//             <p>{student.scores}</p>
//           </div>
//         )}
//         <OneOnOne notes={notes}/>
//       </div>
//     );
//   }
// }
// export default ShowMore;
