// TODO: function to hook setting for yellow results onto achievements

export default function Yellow({warPercent}){
return (
    <div>
        <h3> Percent of Goal Achieved: <span className="yellow">{warPercent}</span> % </h3>
    </div>
)
}