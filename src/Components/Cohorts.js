const Cohorts = ({info, setCohort}) =>{
    function chooseCohort(x){
       setCohort(x)
    }
    function removeDuplicateCohort(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index)
    }

  let duplicateStudentArr = removeDuplicateCohort(info.map((student) => student.cohort.cohortCode))

  duplicateStudentArr.unshift('All Students')

    return (
        < div className="cohorts">
            <h2> 📚 Choose a Class by Start Date 📅 </h2>
            <hr></hr>
            <ul>
            {duplicateStudentArr.map((x, i) => <li key={i} onClick={()=>chooseCohort(x)}>{x.replace(/\d+/g, '')+ " " + x.replace(/\D/g,'')}<hr></hr></li>)}
        </ul>
        </div>
    )
}

export default Cohorts;