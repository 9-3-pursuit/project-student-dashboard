// TODO: function to hook setting for green results onto achievements

export default function Green({warPercent}){
    return (
        <div>
            <h3> Percent of Goal Achieved: <span className="green">{warPercent}</span> % </h3>
        </div>
    )
    }