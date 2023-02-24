import { useState } from "react";

export default function StudentNotes(handleNotesChange) {
    const [notes, setNotes] = useState("");


    function handleNotes(event) {
        setNotes(event.target.value);
    }

    // further down



    return (
        <div>
            <input type="text" onChange={handleNotesChange} />

            <h3>
                {/* {nickName} selected {selectOption} */}
            </h3>
        </div>
    );
}
