import CohortList from "./CohortList.js"

export default function NavBar({data, setList, setTitle}) {
    return (
        <div className="cohorts">
            <h3>Choose a Class by Start Date</h3>
            <ul>
                <li className="line">
                    <button onClick={() => {
                        setList(data); 
                        setTitle('All Students');
                    }}>All Students</button>
                </li>
                <CohortList data={data} setList={setList} setTitle={setTitle}/>
            </ul>
        </div>
    )
};
