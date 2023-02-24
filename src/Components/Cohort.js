export default function Cohort({info,setCohort}){
  function cohortFunction(co){
  setCohort(co)

}

  function removeDuplicate(info) {
    return [...new Set(info)]
}

let cohortArr = removeDuplicate(info.map((st) => st.cohort.cohortCode)).map((x)=>{
  return {seasonyear: x, onlyyear: x.replace(/\D/g,"")} }).sort((a,b)=>{
    return (a.onlyyear - b.onlyyear)
  })

cohortArr.unshift({seasonyear:"All Student",onlyyear:""})

return (
    < div className="cohorts">
        <h1>Choose a Class by Start Date </h1>
        {/* <h4></h4> */}
        <ul>
            {cohortArr.map((co,i) => <li key={i} onClick={()=> cohortFunction(co.seasonyear)}>{co.seasonyear.replace(/\d+/g, '')+ " " + co.onlyyear}<hr></hr></li>)}
        </ul>
    </div>
)
}

