


const Cohorts = ({info,setCohort,name,setName}) =>{

  


     function changeCohort(x) {
        setCohort(x)
     }

    function removeDuplicate(arr) {
        return arr.filter((item,index) => arr.indexOf(item) === index)
    }
   
  let newArr = removeDuplicate(info.map((st) => st.cohort.cohortCode))

  
//we need to sort the newarr and then separate the string
  newArr.unshift("All Student")

    return (
        < div className="cohorts">
            <h1>Choose a Class by Start Date</h1>
           
            <ul>
                {newArr.map((x,i) => <li  key={i} onClick={()=> changeCohort(x)}>{x.replace(/\d+/g, '')+ " " + x.replace(/\D/g,'')} <hr></hr></li>)}
            </ul>
        </div>
    )
}

export default Cohorts
