


const Cohorts = ({info,setCohort}) =>{

  



    function removeDuplicate(arr) {
        return arr.filter((item,index) => arr.indexOf(item) === index)
    }
   
  let newArr = removeDuplicate(info.map((st) => st.cohort.cohortCode)).map((x) => { 
    return {seasonyear: x , onlyyear: x.replace(/\D/g,'')} } ).sort((a, b) => { return (a.onlyyear - b.onlyyear)})


  
//we need to sort the newarr and then separate the string
  newArr.unshift({seasonyear:"All Student", onlyyear:""})

    return (
        < div className="cohorts">
            <h1>Choose a Class by Start Date</h1>
           
            <ul>
                {newArr.map((x,i) => <li  key={i} onClick={()=> setCohort(x.seasonyear)}>{x.seasonyear.replace(/\d+/g, '')+ " " + x.onlyyear} <hr></hr></li>)}
            </ul>
        </div>
    )
}

export default Cohorts
