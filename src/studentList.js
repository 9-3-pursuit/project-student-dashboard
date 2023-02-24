import data from "./data/data.json";



function StudentList (){
    const studentCount = data.length
    const studentSeasons = data.cohort.cohortcode
    return (
        <div>
            <h2>All Students</h2>
            <h3>Total Students: {studentCount}</h3>
            <ul className="studentFilters">
                {data.map((cohort.cohortcode, i) => (
                    <li key={i}>
                        <button
                            onClick={() => {
                                setActiveCategory(data)
                            }}
                        >
                            {data}
                        </button>
                    </li>
                ))}
            </ul>
            <ul className="productsList">
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;