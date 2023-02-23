export default function Cohort({info, setCohort}){

    function changeCohort(x){
      setCohort(x)
    
    }
    
      function removeDuplicate(arr) {
        return arr.filter((item,index) => arr.indexOf(item) === index)
    }
    
    let cohortArr = removeDuplicate(info.map((st) => st.cohort.cohortCode)).map((x) => {
        return {theSeasonYear: x, onlyTheYear: x.replace(/\D/g,'')} } ).sort((a, b) => { return (a.onlyTheYear - b.onlyTheYear)})
    
    
    cohortArr.unshift({theSeasonYear: "All Students", onlyTheYear: ""})
    
    return (
        < div className="cohorts">
            <h1>Choose a Class by Start Date </h1>
            {/* <h4></h4> */}
            
            <ul>
                {cohortArr.map((x,i) => <li key={i} onClick={()=>changeCohort(x.theSeasonYear)}>{x.theSeasonYear.replace(/\d+/g, '')+ " " + x.onlyTheYear}<hr></hr></li>)}
               
            </ul>
        </div>
    )
    }

// ? created a clickable button for each cohort 
// ? sorted by season and year and by alphabetical order in desending order
// ? used unshift to get the season and year with a space between them 
// ? used filter to filter the students to their corresponding cohort
// ?  

