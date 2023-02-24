export default function CohortList ({data, setList, setTitle}) {

    let newArray = [...new Set(data.map(person => person.cohort.cohortCode))];

    function formatCode (code){
        let text = '';
        let numbers = '';

        for(let i = 0; i < code.length; i++){
            if(!isNaN(code[i]) * 1){
                numbers += code[i];
            }else{
                text += code[i];
            }
        }
        return text + ' ' + numbers;
    }


    function handleClick(e) {
        const {value} = e.target;
        let newList = data.filter(student => {
            return student.cohort.cohortCode === value;
        })
        setList(newList);
        setTitle(formatCode(value));
    };

    return newArray.map(code => {
        return (
            <div>
                <li>
                   <button value={code} onClick={handleClick}>{formatCode(code)}</button>
                </li>
                <section className="line"></section>
            </div>
        )
    })
};
