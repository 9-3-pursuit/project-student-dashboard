export default function CohortList({ cohortListData, setActiveCohort }) {
    return (
        <>
            <div className="cohort_list">
                {/* <h3>Choose a Class by Start Date</h3>
            <a>{cohortListData[0].displayName}</a>
            <hr></hr>
            <a>{cohortListData[1].displayName}</a>
            <hr></hr>
            <a>{cohortListData[2].displayName}</a>
            <hr></hr>
            <a>{cohortListData[3].displayName}</a>
            <hr></hr>
            <a>{cohortListData[4].displayName}</a>
            <hr></hr>
            <a>{cohortListData[5].displayName}</a>
            <hr></hr>
            <a>{cohortListData[6].displayName}</a>
            <hr></hr>
            <a>{cohortListData[7].displayName}</a>
            <hr></hr>
            <a>{cohortListData[8].displayName}</a>
            <hr></hr> */}
                {cohortListData.map((cohort, i) =>
                    <>
                        <p key={i} onClick={setActiveCohort(cohort.id)}>{cohort.displayName}</p>
                        <hr></hr>
                    </>
                )}
            </div>
        </>

    )
}