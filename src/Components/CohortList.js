import "./CohortList.css"
export default function CohortList({data}) {
    // console.log(CohortList)
    return(
        <div>
            <h2>Choose a Class by Start Date </h2>
            <ul>
                <li>
                    <button>All Students</button>
                </li>
                <li>
                    <button>Winter 2026</button>
                </li>
                <li>
                    <button>Fall 2026</button>
                </li>
                <li>
                    <button>Summer 2026</button>
                </li>
                <li>
                    <button>spring 2026</button>
                </li>
                <li>
                    <button>Winter 2025</button>
                </li>
                <li>
                    <button>Fall 2025</button>
                </li>
                <li>
                    <button>Summer 2025</button>
                </li>
                <li>
                    <button>Spring 2025</button>
                </li>
            </ul>
        </div>
    )
}