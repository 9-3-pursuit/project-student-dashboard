// TODO: function to hook setting for red results onto achievements

export default function Red({warPercent}){
    return (
        <div>
            <h3> Percent of Goal Achieved: <span className="red">{warPercent}</span> % </h3>
        </div>
    )
    }