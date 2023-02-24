export default function Cohort({info,setCohort}){
  function cohortFunction(co){
  setCohort(co)

}

  function removeAllDuplicate(cohort) {
    return cohort.filter((item,index) => cohort.indexOf(item) === index)
}

let MyCohortArr = removeAllDuplicate(info.map((str) => str.cohort.cohortCode)).map((co)=>{
  return {seasonyear: co, onlyyear: co.replace(/\D/g,"")} }).sort((a,b)=>{
    return (a.onlyyear - b.onlyyear)
  })

  MyCohortArr.unshift({seasonyear:"All Student",onlyyear:""})

return (
    < div className="cohorts">
        <h1>Choose a Class by Start Date </h1>
        {/* <h4></h4> */}
        <ul>
            {MyCohortArr.map((x,i) => <li key={i} onClick={()=> cohortFunction(x.seasonyear)}>{x.seasonyear.replace(/\d+/g, '')+ " " + x.onlyyear}<hr></hr></li>)}
        </ul>
    </div>
)
}

